import { Injectable, Inject, HttpException, HttpStatus, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';
import { UserService } from 'src/user/user.service';
import { BillDto } from './dto/bill.dto';
import { BillDetailService } from 'src/bill-detail/bill-detail.service';
import { CreateBillDetailDto } from 'src/bill-detail/dto/create-bill-detail.dto';
import { Op, fn, col, literal } from 'sequelize';

@Injectable()
export class BillService {
    constructor(
        @Inject('BILL_REPOSITORY')
        private billRepository: typeof Bill,

        private userSerivce: UserService,
        private billDetailService: BillDetailService,
    ) { }

    async create(data: CreateBillDto) {
        const isExists = await this.userSerivce.isExists(data.userId);
        if (!isExists) {
            throw new HttpException('User is not exist', HttpStatus.NOT_FOUND);
        }

        const record = await this.billRepository.create({
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address,
            totalPrice: data.totalPrice,
            paymentMethod: data.paymentMethod,
            status: data.status,
            userId: data.userId,
        });

        const billData = await record.save();

        data.details.forEach(async (obj, index) => {
            obj.billId = billData.id;
            await this.billDetailService.create(obj);
        })

        return new BillDto(billData);
    }

    async findAll() {
        const data = await this.billRepository.findAll<Bill>({
            order: [
                ['id', 'DESC']
            ]
        });

        return data.map(obj => new BillDto(obj));
    }

    async findOne(id: number) {
        const record = await this.billRepository.findOne<Bill>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        const retData = new BillDto(record);

        retData.details = await this.billDetailService.findByBillId(record.id);

        return retData;
    }

    async findOneByUser(idUser: number, idBill: number) {
        const record = await this.billRepository.findOne<Bill>({
            where: {
                id: idBill,
                userId: idUser,
            },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        const retData = new BillDto(record);

        retData.details = await this.billDetailService.findByBillId(record.id);

        return retData;
    }

    async findAllByUser(idUser: number, user: any) {
        if (idUser !== user.userId) {
            throw new UnauthorizedException("You cannot not view others bill list");
        }

        const data = await this.billRepository.findAll<Bill>({
            where: { userId: idUser },
            order: [
                ['id', 'DESC']
            ]
        });

        return data.map(obj => new BillDto(obj));
    }

    async findRevenue(months: number) {

        const count = await this.billRepository.count();
        if (count <= 0) {
            return [];
        }

        const date = new Date();
        date.setMonth(date.getMonth() - months);

        const revenue = await this.billRepository.findAll({
            attributes: [
                [fn('date_format', col('createdAt'), '%m/%Y'), 'date'],
                [fn('sum', col('totalPrice')), 'revenue']
            ],
            where: {
                createdAt: {
                    [Op.gte]: date
                }
            },
            group: [fn('MONTH', col('createdAt')), fn('YEAR', col('createdAt'))],
            raw: true,
        });

        return revenue;
    }

    async remove(id: number) {
        const record = await this.billRepository.findOne<Bill>({
            where: { id: id },
        });

        if (!record) {
            throw new NotFoundException('No record found');
        }

        await record.destroy();

        return "Deleted successfully";
    }
}

import {
    Controller, Get, Post, Body, Patch, Req,
    Param, Delete, InternalServerErrorException, UseGuards, Query
} from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminGuard, GuestGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@ApiTags('bill')
@Controller('bill')
export class BillController {
    constructor(private readonly billService: BillService) { }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Post()
    create(@Body() createBillDto: CreateBillDto) {
        try {
            return this.billService.create(createBillDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get()
    findAll() {
        try {
            return this.billService.findAll();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        try {
            return this.billService.remove(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get("find-revenue")
    findRevenue(@Query('months') months: number) {
        try {
            months = months ? Number(months) : 10;
            return this.billService.findRevenue(months);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        try {
            return this.billService.findOne(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Get('find-one/:idUser/:idBill')
    findOneByUser(@Param('idUser') idUser: string, @Param('idBill') idBill: string) {
        try {
            return this.billService.findOneByUser(+idUser, +idBill);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Get('find-all/:idUser')
    findAllByUser(@Param('idUser') idUser: string, @Req() request: Request) {
        try {
            return this.billService.findAllByUser(+idUser, request['user']);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}

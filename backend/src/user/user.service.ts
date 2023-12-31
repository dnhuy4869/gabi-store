import { Injectable, Inject, HttpException, HttpStatus, BadRequestException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { genSalt, hash, compare } from 'bcrypt';
import * as fs from "fs";
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: typeof User
    ) { }

    async hashPassword(password: string) {
        const salt = await genSalt(10);
        return await hash(password, salt);
    }

    async comparePassword(password: string, hashed: string) {
        return await compare(password, hashed);
    }

    async create(data: CreateUserDto) {
        const isExists = await this.isExistsByEmail(data.email);
        if (isExists) {
            throw new BadRequestException('Email is already exist');
        }

        const hashedPassword = await this.hashPassword(data.password);

        const record = await this.userRepository.create({
            email: data.email,
            password: hashedPassword,
            fullName: data.fullName,
            role: data.role,
            isEmailVerified: data.isEmailVerified,
        });

        const retData = await record.save();
        return new UserDto(retData);
    }

    async findAll() {
        const data = await this.userRepository.findAll<User>({
            order: [
                ['id', 'DESC']
            ]
        });

        return data.map(obj => new UserDto(obj));
    }

    async findOne(id: number): Promise<UserDto | undefined> {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        return new UserDto(record);
    }

    async resetPassword(id: number, newPassword: string) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        record.password = await this.hashPassword(newPassword);

        await record.save();

        return new UserDto(record);
    }

    async verifyUser(id: number) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new NotFoundException("Invalid id");
        }

        if (record.isEmailVerified === true) {
            return "Email is already verified";
        }

        record.isEmailVerified = true;

        await record.save()

        return "Verified successfully";
    }

    async findOneByEmail(email: string): Promise<UserDto | undefined> {
        const record = await this.userRepository.findOne<User>({
            where: { email: email },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        return new UserDto(record);
    }

    async updateInfo(id: number, data: UpdateUserInfoDto) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        record.fullName = data.fullName;
        record.phoneNumber = data.phoneNumber;
        record.address = data.address;

        const retData = await record.save();
        return new UserDto(retData);
    }

    async updatePassword(id: number, data: UpdateUserPasswordDto) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        const validPassword = await this.comparePassword(data.oldPassword, record.password);
        if (!validPassword) {
            throw new UnauthorizedException('Password is not correct');
        }

        const hashedPassword = await this.hashPassword(data.newPassword);

        record.password = hashedPassword;

        const retData = await record.save();
        return new UserDto(retData);
    }

    async update(id: number, data: UpdateUserDto) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        const hashedPassword = await this.hashPassword(data.password);

        record.password = hashedPassword;
        record.fullName = data.fullName;
        record.role = data.role;

        const retData = await record.save();
        return new UserDto(retData);
    }

    async remove(id: number, user: any) {
        if (id == user.userId) {
            throw new BadRequestException("You cannot delete yourself");
        }

        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        this.deleteAvatar(record);

        await record.destroy();

        return "Deleted successfully";
    }

    async updateAvatar(id: number, image: any) {
        const record = await this.userRepository.findOne<User>({
            where: { id: id },
        });

        if (!record) {
            throw new HttpException('No record found', HttpStatus.NOT_FOUND);
        }

        if (image.name.length > 155) {
            throw new BadRequestException("File name too long");
        }

        const fileName = `/upload/user/${record.id}/${image.md5}/${image.name}`;
        if (fileName === record.avatarUrl) {
            return "File is already exist";
        }

        this.deleteAvatar(record);

        image.mv(`./public${fileName}`);

        record.avatarUrl = fileName;
        await record.save();

        return fileName;
    }

    deleteAvatar(record: User) {
        if (record.avatarUrl && record.avatarUrl !== "") {
            fs.unlinkSync(`./public${record.avatarUrl}`);
        }
    }

    async isExists(id: number) {
        const record = await this.userRepository.findOne({
            where: { id }
        });

        return !!record;
    }

    async isExistsByEmail(email: string) {
        const record = await this.userRepository.findOne({
            where: { email: email }
        });

        return !!record;
    }

    async count() {
        return await this.userRepository.count();
    }
}

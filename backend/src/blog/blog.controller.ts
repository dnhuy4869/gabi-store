import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, InternalServerErrorException, Req, BadRequestException, Query } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post()
    create(@Body() data: CreateBlogDto) {
        try {
            return this.blogService.create(data);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get()
    findAll() {
        try {
            return this.blogService.findAll();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get("find-paginate")
    async findPaginate(@Query('limit') limit: number, @Query('page') page: number) {
        try {
            limit = limit ? Number(limit) : 10; // Default limit is 10
            page = page ? Number(page) : 1; // Default page is 1

            const offset = (page - 1) * limit;

            const totalItems = await this.blogService.count();
            const totalPages = Math.ceil(totalItems / limit);

            const data = await this.blogService.findPaginate(limit, offset);

            return {
                data: data,
                totalPages: totalPages,
            };
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        try {
            return this.blogService.findOne(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
        try {
            return this.blogService.update(+id, updateBlogDto);
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
            return this.blogService.remove(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post('upload-thumbnail/:id')
    uploadFile(@Param('id') id: string, @Req() request: Request) {
        try {
            if (!request.files) {
                throw new BadRequestException("Invalid file");
            }

            const image = request.files["image"];
            if (!image) {
                throw new BadRequestException("Invalid image");
            }

            return this.blogService.updateThumbnail(+id, image);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}

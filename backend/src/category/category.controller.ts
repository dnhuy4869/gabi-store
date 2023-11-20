import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Req, UseGuards, InternalServerErrorException } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AdminGuard } from 'src/auth/auth.guard';

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {

    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
        try {
            return this.categoryService.create(createCategoryDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get()
    findAll() {
        try {
            return this.categoryService.findAll();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        try {
            return this.categoryService.findOne(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        try {
            return this.categoryService.update(+id, updateCategoryDto);
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
            return this.categoryService.remove(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Post('upload-image/:id')
    uploadFile(@Param('id') id: string, @Req() request: Request) {
        try {
            if (!request.files) {
                throw new BadRequestException("Invalid file");
            }
    
            const image = request.files["image"];
            if (!image) {
                throw new BadRequestException("Invalid image");
            }
    
            return this.categoryService.updateImage(+id, image);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}

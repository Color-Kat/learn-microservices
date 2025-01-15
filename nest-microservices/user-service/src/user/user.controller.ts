import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern } from "@nestjs/microservices";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post('/')
    @MessagePattern('users.create')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get('/')
    @MessagePattern('users.findAll')
    findAll() {
        return this.userService.findAll();
    }

    @Get('/:id')
    @MessagePattern('users.findOne')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id);
    }

    @Patch('/:id')
    @MessagePattern('users.update')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete('/:id')
    @MessagePattern('users.remove')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}

import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(

    ) {
    }

    async create(dto: CreateUserDto) {

    }

    findAll() {

    }

    async findOne(id: number) {

    }

    async update(id: number, updateUserDto: UpdateUserDto) {

    }

    async remove(id: number): Promise<User> {

    }
}

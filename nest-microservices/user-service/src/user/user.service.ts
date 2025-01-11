import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from "../prisma/prisma.service";
import { User } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService,
    ) {
    }

    async create(dto: CreateUserDto): Promise<User> {
        const user = await this.prisma.user.create({
            data: {
                username: dto.username,
                email: dto.email,
                password: dto.password,
                profile: {
                    create: {}
                },
                roles: {
                    connect: {
                        name: "User"
                    }
                }
            }
        });

        return user;
    }

    findAll() {
        return this.prisma.user.findMany({
            // include: {
            //     roles: true,
            //     profile: true
            // }
        });
    }

    findOne(id: number) {
        return this.prisma.user.findUnique({
            where  : { id },
            include: {
                profile: true,
                roles  : true
            }
        })
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}

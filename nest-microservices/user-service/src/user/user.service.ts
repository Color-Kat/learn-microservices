import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email }
        });

        if (existingUser) {
            throw new ConflictException(['A user with this email already exists']);
        }

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

    async findOne(id: number): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where  : { id },
            include: {
                profile: true,
                roles  : true
            }
        });

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.prisma.user.update({
            where: {id},
            data: {
                ...updateUserDto
            }
        });

        return user;
    }

    async remove(id: number): Promise<User> {
        const user = await this.prisma.user.delete({
            where: {id},
        });

        return user;
    }
}

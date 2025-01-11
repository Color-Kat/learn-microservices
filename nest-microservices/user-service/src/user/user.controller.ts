import { Controller, Get } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ) {
    }

    @Get('/')
    async getUsers() {
        return this.userService.getAllUsers();
    }
}

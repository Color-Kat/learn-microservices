import { Controller, Get } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Controller('users')
export class UserController {
    constructor(
        private readonly prisma: PrismaService
    ) {
    }

    @Get('/')
    getUsers() {
        return this.prisma.user.findMany();
    }
}

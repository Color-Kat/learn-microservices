import { Controller, Get } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Controller('users')
export class UserController {
    constructor(
        private readonly prisma: PrismaService
    ) {
    }

    @Get('/')
    async getUsers() {
        // return this.prisma.user.findMany({
        //     include: {
        //         roles: {
        //             include: {
        //                 role: true
        //             }
        //         },
        //     }
        // });

        return this.prisma.user.findMany({
            include: {
                roles: true
            }
        });
    }
}

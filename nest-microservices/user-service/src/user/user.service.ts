import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {

    constructor(
        private readonly prisma: PrismaService,
    ) {
    }

    public getAllUsers() {
        return this.prisma.user.findMany({
            // include: {
            //     roles: true,
            //     profile: true
            // }
        });
    }

}

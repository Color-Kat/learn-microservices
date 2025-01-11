import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppService {
    constructor(private configService: ConfigService)  {
        console.log(configService.get('DATABASE_URL'));
    }

    getHello(): string {
        console.log()
        return 'Hi, I\'m Microservice UserService! I use Transport.TCP to response.';
    }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hi, I\'m Microservice A! I use Transport.TCP to response.';
    }
}

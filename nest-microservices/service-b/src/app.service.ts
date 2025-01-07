import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Gutten tag! Ich bin die Microservice B';
    }
}

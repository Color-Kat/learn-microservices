import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): Promise<string> {
        // return new Promise<string>((resolve) => resolve(
        //     '123'
        // ));
        return this.appService.getHello();
    }
}

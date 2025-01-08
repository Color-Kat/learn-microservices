import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { PythonServiceService } from "./python-service/python-service.service";

@Injectable()
export class AppService {
    constructor(
        @Inject('SERVICE_A') private readonly serviceAClient: ClientProxy,
        @Inject('SERVICE_B') private readonly serviceBClient: ClientProxy,
        private readonly pythonService: PythonServiceService,
    ) {}

    async getHello(): Promise<string> {
        const resultA = await firstValueFrom(this.serviceAClient.send('getHello', {  }));
        const resultB = await firstValueFrom(this.serviceBClient.send('getHello', {  }));
        const resultPython = await this.pythonService.getHello();

        return `<pre>
            Service A says:
            ${resultA}
            
            Service B says:
            ${resultB}
            
            Python Service says:
            ${resultPython}
        </pre>`;
    }
}

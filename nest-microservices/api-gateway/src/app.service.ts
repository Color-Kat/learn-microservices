import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Injectable()
export class AppService {
    constructor(
        @Inject('SERVICE_A') private readonly serviceAClient: ClientProxy,
        @Inject('SERVICE_B') private readonly serviceBClient: ClientProxy,
    ) {}

    async getHello(): Promise<string> {
        const resultA = await firstValueFrom(this.serviceAClient.send('getHello', {  }));
        const resultB = await firstValueFrom(this.serviceBClient.send('getHello', {  }));

        return `<pre>
            Service A says:
            ${resultA}
            
            Service B says:
            ${resultB}
        </pre>`;
    }
}

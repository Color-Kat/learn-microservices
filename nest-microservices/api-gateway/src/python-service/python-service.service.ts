import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class PythonServiceService {
    constructor(
        private readonly httpService: HttpService
    ) {
    }

    public async getHello(): Promise<string> {
        const response = await firstValueFrom(this.httpService.get('/'));

        return response.data;
    }
}

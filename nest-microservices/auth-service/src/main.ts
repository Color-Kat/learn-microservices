import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
    // Http app
    const app = await NestFactory.create(AppModule);

    // TCP microservice
    const microservice = app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: 3002,
        },
    });

    // Run microservice
    await app.startAllMicroservices();

    // Run http server
    await app.listen(3102);
}

bootstrap();

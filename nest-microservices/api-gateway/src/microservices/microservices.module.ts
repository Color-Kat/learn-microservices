import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            {name: "SERVICE_A", transport: Transport.TCP, options: {host: 'service-a', port: 3001}},
            {name: "SERVICE_B", transport: Transport.NATS, options: {servers: ['nats://nats:4222']}},
        ]),
    ],
    exports: [ClientsModule], // Export declared microservices to use it outside
})
export class MicroservicesModule {}

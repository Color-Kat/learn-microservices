import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
      ClientsModule.register([
          {name: "SERVICE_A", transport: Transport.TCP, options: {host: 'service-a', port: 3001}},
          // {name: "SERVICE_B", transport: Transport.NATS, options: {servers: ['nats://localhost:4222']}},
      ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

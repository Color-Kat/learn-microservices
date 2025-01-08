import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroservicesModule } from './microservices/microservices.module';
import { PythonServiceModule } from './python-service/python-service.module';

@Module({
  imports: [
      MicroservicesModule,
      PythonServiceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

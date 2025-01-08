import { Module } from '@nestjs/common';
import { PythonServiceController } from './python-service.controller';
import { PythonServiceService } from './python-service.service';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
      HttpModule.register({
        baseURL: 'http://python-service:3003',
      })
  ],
  controllers: [PythonServiceController],
  providers: [PythonServiceService],
  exports: [PythonServiceService]
})
export class PythonServiceModule {}

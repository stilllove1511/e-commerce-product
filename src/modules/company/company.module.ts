import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '@src/core/database/entities/company.entity';
import { CompanyResponse } from './company.response';

@Module({
    imports: [TypeOrmModule.forFeature([Company])],
    controllers: [CompanyController],
    providers: [CompanyService, CompanyResponse],
})
export class CompanyModule {}

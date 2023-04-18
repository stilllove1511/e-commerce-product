import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORMModule } from './core/database/orm.module';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './modules/company/company.module';
import { AreaModule } from './modules/area/area.module';

@Module({
    imports: [ConfigModule.forRoot(), ORMModule, CompanyModule, AreaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

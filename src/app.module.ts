import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORMModule } from './core/database/orm.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/product/product.module'

@Module({
    imports: [ConfigModule.forRoot(), ORMModule, ProductModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORMModule } from './core/database/orm.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/product/product.module'
import { BrandtModule } from './modules/brand/brand.module'
import { CategorytModule } from './modules/category/category.module'

@Module({
    imports: [
        ConfigModule.forRoot(),
        ORMModule,
        ProductModule,
        BrandtModule,
        CategorytModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

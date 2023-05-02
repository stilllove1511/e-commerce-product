import { Module } from '@nestjs/common'
import { ORMModule } from './core/database/orm.module'
import { ConfigModule } from '@nestjs/config'
import { ProductModule } from './modules/product/product.module'
import { BrandModule } from './modules/brand/brand.module'
import { CategorytModule } from './modules/category/category.module'

@Module({
    imports: [
        ConfigModule.forRoot(),
        ORMModule,
        ProductModule,
        BrandModule,
        CategorytModule,
    ],
})
export class AppModule {}

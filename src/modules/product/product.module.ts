import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from '@src/core/database/entities/product.entity'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { Attribute } from '@src/core/database/entities/attibute.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Product, Attribute])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from '@src/core/database/entities/category.entity'
import { CategoryService } from './category.service'
import { CategoryController } from './category.controller'

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export class CategorytModule {}

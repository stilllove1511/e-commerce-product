import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Brand } from '@src/core/database/entities/brand.entity'
import { BrandService } from './brand.service'
import { BrandController } from './brand.controller'

@Module({
    imports: [TypeOrmModule.forFeature([Brand])],
    controllers: [BrandController],
    providers: [BrandService],
})
export class BrandtModule {}

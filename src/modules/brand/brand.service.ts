import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Brand } from '@src/core/database/entities/brand.entity'
import { ERROR_CODE } from '@src/utils/enums/error_code.enum'
import { Repository } from 'typeorm'

@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>,
    ) {}

    async findOneBy(param) {
        return this.brandRepository.findOneBy(param)
    }

    async createBrand(data) {
        return this.brandRepository.save(data)
    }

    async getAllBrand({ page, size }) {
        const take = size
        const skip = (page - 1) * size
        const result = await this.brandRepository.findAndCount({
            take,
            skip,
        })
        const total = result[1]
        const data = result[0]
        return {
            total,
            data,
        }
    }

    async getBrand(id) {
        return this.brandRepository.findOneBy({ id })
    }

    async updateBrand(data) {
        return this.brandRepository.save(data)
    }

    async deleteBrand(id) {
        return this.brandRepository.softDelete(id)
    }
}

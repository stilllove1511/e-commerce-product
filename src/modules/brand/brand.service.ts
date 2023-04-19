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

    async createBrand(data) {
        let result = await this.brandRepository.save(data)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }

    async getAllBrand({ take, skip }) {
        const result = await this.brandRepository.findAndCount({
            take,
            skip,
        })
        const total = result[1]
        const data = result[0]
        return {
            code: ERROR_CODE.SUCCESS,
            data: { total, data },
        }
    }

    async getBrand(id) {
        const result = await this.brandRepository.findOneBy({ id })
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }

    async updateBrand(data) {
        const band = await this.brandRepository.findOneBy({
            id: data.id,
        })
        if (band) {
            await this.brandRepository.save(data)
            return {
                code: ERROR_CODE.SUCCESS,
            }
        } else {
            return {
                code: ERROR_CODE.FAIL,
                message: 'band is not exist',
            }
        }
    }

    async deleteBrand(id) {
        const result = await this.brandRepository.softDelete(id)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }
}

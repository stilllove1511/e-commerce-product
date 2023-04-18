import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from '@src/core/database/entities/product.entity'
import { ERROR_CODE } from '@src/utils/enums/error_code.enum'
import { Repository } from 'typeorm'

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async createProduct(data) {
        const result = await this.productRepository.save(data)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }

    async getAllProduct({ take, skip }) {
        const result = await this.productRepository.findAndCount({
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

    async getProduct(id) {
        const result = await this.productRepository.findOneBy({ id })
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }

    async updateProduct(data) {
        const product = await this.productRepository.findOneBy({
            id: data.id,
        })
        if (product) {
            const result = await this.productRepository.save(data)
            return {
                code: ERROR_CODE.SUCCESS,
                data: result,
            }
        } else {
            return {
                code: ERROR_CODE.FAIL,
                message: 'product is not exist',
            }
        }
    }

    async deleteProduct(id) {
        const result = await this.productRepository.softDelete(id)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }
}

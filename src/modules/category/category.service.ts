import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from '@src/core/database/entities/category.entity'
import { ERROR_CODE } from '@src/utils/enums/error_code.enum'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    async createCategory(data) {
        let result = await this.categoryRepository.save(data)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }

    async getAllCategory({ take, skip }) {
        const result = await this.categoryRepository.findAndCount({
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

    async getCategory(id) {
        const result = await this.categoryRepository.findOneBy({ id })
        if (result) {
            return {
                code: ERROR_CODE.SUCCESS,
                data: result,
            }
        } else {
            return {
                code: ERROR_CODE.FAIL,
                message: 'category not exist',
            }
        }
    }

    async updateCategory(data) {
        const band = await this.categoryRepository.findOneBy({
            id: data.id,
        })
        if (band) {
            await this.categoryRepository.save(data)
            return {
                code: ERROR_CODE.SUCCESS,
            }
        } else {
            return {
                code: ERROR_CODE.FAIL,
                message: 'category is not exist',
            }
        }
    }

    async deleteCategory(id) {
        const result = await this.categoryRepository.softDelete(id)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }
}

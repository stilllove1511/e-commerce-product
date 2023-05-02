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

    async finOneBy(param) {
        return this.categoryRepository.findOneBy(param)
    }

    async createCategory(data) {
        return this.categoryRepository.save(data)
    }

    async getAllCategory({ page, size }) {
        const take = size
        const skip = (page - 1) * size
        const response = await this.categoryRepository.findAndCount({
            take,
            skip,
        })
        const total = response[1]
        const data = response[0]
        return { total, data }
    }

    async getCategory(id) {
        return this.categoryRepository.findOneBy({ id })
    }

    async updateCategory(data) {
        return this.categoryRepository.save(data)
    }

    async deleteCategory(id) {
        return await this.categoryRepository.softDelete(id)
    }
}

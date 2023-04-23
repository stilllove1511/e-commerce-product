import { Controller } from '@nestjs/common'
import { CategoryService } from './category.service'
import { MessagePattern } from '@nestjs/microservices'
import { CATEGORY_PATTERN } from '@src/utils/enums/category.enum'

@Controller()
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @MessagePattern(CATEGORY_PATTERN.category_create)
    async createCategory(data) {
        return this.categoryService.createCategory(data)
    }

    @MessagePattern(CATEGORY_PATTERN.category_get_all)
    async getAllCategory({ page = 1, size = 10 }) {
        const take = size
        const skip = (page - 1) * size
        return this.categoryService.getAllCategory({ take, skip })
    }

    @MessagePattern(CATEGORY_PATTERN.category_get_one)
    async getCategory(id: string) {
        return this.categoryService.getCategory(id)
    }

    @MessagePattern(CATEGORY_PATTERN.category_update)
    async updateCategory(data) {
        return this.categoryService.updateCategory(data)
    }

    @MessagePattern(CATEGORY_PATTERN.category_delete)
    async deleteCategory(id: string) {
        return this.categoryService.deleteCategory(id)
    }
}

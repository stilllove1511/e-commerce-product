import { Controller, UseGuards } from '@nestjs/common'
import { CategoryService } from './category.service'
import { MessagePattern } from '@nestjs/microservices'
import { CATEGORY_PATTERN } from '@src/utils/enums/category.enum'
import { Roles } from '@src/utils/decorators/role.decorator'
import { role } from '@src/utils/enums/role.enum'
import { JwtAuthGuard } from '@src/utils/guards/jwt.guard'
import { RolesGuard } from '@src/utils/guards/roles.guard'
import { ERROR_CODE } from '@src/utils/enums/error_code.enum'

@Controller()
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(role.admin)
    @MessagePattern(CATEGORY_PATTERN.category_create)
    async createCategory(data) {
        const result = await this.categoryService.createCategory(data)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }

    @MessagePattern(CATEGORY_PATTERN.category_get_all)
    async getAllCategory({ page = 1, size = 10 }) {
        const data = await this.categoryService.getAllCategory({ page, size })
        return {
            code: ERROR_CODE.SUCCESS,
            data,
        }
    }

    @MessagePattern(CATEGORY_PATTERN.category_get_one)
    async getCategory(id: string) {
        const category = await this.categoryService.getCategory(id)
        if (category) {
            return {
                code: ERROR_CODE.SUCCESS,
                data: category,
            }
        } else {
            return {
                code: ERROR_CODE.FAIL,
                message: 'category not exist',
            }
        }
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(role.admin)
    @MessagePattern(CATEGORY_PATTERN.category_update)
    async updateCategory(data) {
        const category = this.categoryService.finOneBy({id:data.id})
        if (category) {
            await this.categoryService.updateCategory(data)
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

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(role.admin)
    @MessagePattern(CATEGORY_PATTERN.category_delete)
    async deleteCategory(id: string) {
        await this.categoryService.deleteCategory(id)
        return {
            code: ERROR_CODE.SUCCESS,
        }
    }
}

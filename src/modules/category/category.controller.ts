import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { UseRoles } from '@src/utils/decorators/role.decorator'
import { role } from '@src/utils/enums/role.enum'
import { JwtAuthGuard } from '@src/utils/guards/jwt.guard'
import { RolesGuard } from '@src/utils/guards/roles.guard'
import { ERROR_CODE } from '@src/utils/enums/error_code.enum'

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @UseRoles(role.admin)
    @Post('create')
    async createCategory(@Body() data) {
        const result = await this.categoryService.createCategory(data)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }

    @Post('get-all')
    async getAllCategory(@Body() { page = 1, size = 10 }) {
        const data = await this.categoryService.getAllCategory({ page, size })
        return {
            code: ERROR_CODE.SUCCESS,
            data,
        }
    }

    @Get('get-one/:id')
    async getCategory(@Param() id: string) {
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
    @UseRoles(role.admin)
    @Put('update')
    async updateCategory(@Body() data) {
        const category = this.categoryService.finOneBy({ id: data.id })
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
    @UseRoles(role.admin)
    @Put('delete/:id')
    async deleteCategory(@Param() id: string) {
        await this.categoryService.deleteCategory(id)
        return {
            code: ERROR_CODE.SUCCESS,
        }
    }
}

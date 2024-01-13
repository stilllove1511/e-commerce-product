import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UseGuards,
} from '@nestjs/common'
import { ProductService } from './product.service'
import { UseRoles } from '@src/utils/decorators/role.decorator'
import { RolesGuard } from '@src/utils/guards/roles.guard'
import { JwtAuthGuard } from '@src/utils/guards/jwt.guard'
import { role } from '@src/utils/enums/role.enum'
import { ERROR_CODE } from '@src/utils/enums/error_code.enum'

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @UseRoles(role.admin)
    @Post('create')
    async createProduct(@Body() data) {
        const product = await this.productService.createProduct(data)
        return {
            code: ERROR_CODE.SUCCESS,
            data: product,
        }
    }

    @Get('get_all')
    async getAllProduct(@Query('page') page = 1, @Query('size') size = 0) {
        const data = await this.productService.getAllProduct({ page, size })
        return {
            code: ERROR_CODE.SUCCESS,
            data,
        }
    }

    @Get('get-one/:id')
    async getProduct(@Param() id: string) {
        return this.productService.getProduct(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @UseRoles(role.admin)
    @Put('update')
    async updateProduct(@Body() data) {
        return this.productService.updateProduct(data)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @UseRoles(role.admin)
    @Delete('delete/:id')
    async deleteProduct(@Param() id: string) {
        return this.productService.deleteProduct(id)
    }
}

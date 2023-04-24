import { Controller, UseGuards } from '@nestjs/common'
import { ProductService } from './product.service'
import { MessagePattern } from '@nestjs/microservices'
import { PRODUCT_PATTERN } from '@src/utils/enums/product.enum'
import { Roles } from '@src/utils/decorators/role.decorator'
import { RolesGuard } from '@src/utils/guards/roles.guard'
import { JwtAuthGuard } from '@src/utils/guards/jwt.guard'

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @MessagePattern(PRODUCT_PATTERN.product_create)
    async createProduct(data) {
        return this.productService.createProduct(data)
    }

    @MessagePattern(PRODUCT_PATTERN.product_get_all)
    async getAllProduct({ page = 1, size = 10 }) {
        const take = size
        const skip = (page - 1) * size
        return this.productService.getAllProduct({ take, skip })
    }

    @MessagePattern(PRODUCT_PATTERN.product_get_one)
    async getProduct(id: string) {
        return this.productService.getProduct(id)
    }

    @MessagePattern(PRODUCT_PATTERN.product_update)
    async updateProduct(data) {
        return this.productService.updateProduct(data)
    }

    @MessagePattern(PRODUCT_PATTERN.product_delete)
    async deleteProduct(id: string) {
        return this.productService.deleteProduct(id)
    }
}

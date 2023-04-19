import { Controller } from '@nestjs/common'
import { ProductService } from './product.service'
import { MessagePattern } from '@nestjs/microservices'
import { PRODUCT_PATTERN } from '@src/utils/enums/product.enum'

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

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

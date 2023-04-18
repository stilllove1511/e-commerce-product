import { Controller } from '@nestjs/common'
import { ProductService } from './product.service'
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @MessagePattern('product_create')
    async createProduct(data) {
        return this.productService.createProduct(data)
    }

    @MessagePattern('product_get_all')
    async getAllProduct({ page = 1, size = 10 }) {
        const take = size
        const skip = (page - 1) * size
        return this.productService.getAllProduct({ take, skip })
    }

    @MessagePattern('product_get_one')
    async getProduct(id: string) {
        return this.productService.getProduct(id)
    }

    @MessagePattern('product_update')
    async updateProduct(data) {
        return this.productService.updateProduct(data)
    }

    @MessagePattern('product_delete')
    async deleteProduct(id: string) {
        return this.productService.deleteProduct(id)
    }
}

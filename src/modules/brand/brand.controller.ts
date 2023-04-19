import { Controller } from '@nestjs/common'
import { BrandService } from './brand.service'
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class BrandController {
    constructor(private readonly brandService: BrandService) {}

    @MessagePattern('brand_create')
    async createBrand(data) {
        return this.brandService.createBrand(data)
    }

    @MessagePattern('brand_get_all')
    async getAllBrand({ page = 1, size = 10 }) {
        const take = size
        const skip = (page - 1) * size
        return this.brandService.getAllBrand({ take, skip })
    }

    @MessagePattern('brand_get_one')
    async getBrand(id: string) {
        return this.brandService.getBrand(id)
    }

    @MessagePattern('brand_update')
    async updateBrand(data) {
        return this.brandService.updateBrand(data)
    }

    @MessagePattern('brand_delete')
    async deleteBrand(id: string) {
        return this.brandService.deleteBrand(id)
    }
}

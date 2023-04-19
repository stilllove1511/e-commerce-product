import { Controller } from '@nestjs/common'
import { BrandService } from './brand.service'
import { MessagePattern } from '@nestjs/microservices'
import { BRAND_PATTERN } from '@src/utils/enums/brand.enum'

@Controller()
export class BrandController {
    constructor(private readonly brandService: BrandService) {}

    @MessagePattern(BRAND_PATTERN.brand_create)
    async createBrand(data) {
        return this.brandService.createBrand(data)
    }

    @MessagePattern(BRAND_PATTERN.brand_get_all)
    async getAllBrand({ page = 1, size = 10 }) {
        const take = size
        const skip = (page - 1) * size
        return this.brandService.getAllBrand({ take, skip })
    }

    @MessagePattern(BRAND_PATTERN.brand_get_one)
    async getBrand(id: string) {
        return this.brandService.getBrand(id)
    }

    @MessagePattern(BRAND_PATTERN.brand_update)
    async updateBrand(data) {
        return this.brandService.updateBrand(data)
    }

    @MessagePattern(BRAND_PATTERN.brand_delete)
    async deleteBrand(id: string) {
        return this.brandService.deleteBrand(id)
    }
}

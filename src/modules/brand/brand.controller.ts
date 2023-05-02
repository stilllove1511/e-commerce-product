import { Controller, UseGuards } from '@nestjs/common'
import { BrandService } from './brand.service'
import { MessagePattern } from '@nestjs/microservices'
import { BRAND_PATTERN } from '@src/utils/enums/brand.enum'
import { Roles } from '@src/utils/decorators/role.decorator'
import { role } from '@src/utils/enums/role.enum'
import { JwtAuthGuard } from '@src/utils/guards/jwt.guard'
import { RolesGuard } from '@src/utils/guards/roles.guard'
import { ERROR_CODE } from '@src/utils/enums/error_code.enum'

@Controller()
export class BrandController {
    constructor(private readonly brandService: BrandService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(role.admin)
    @MessagePattern(BRAND_PATTERN.brand_create)
    async createBrand(data) {
        const brand = await this.brandService.createBrand(data)
        return {
            code: ERROR_CODE.SUCCESS,
            data: brand,
        }
    }

    @MessagePattern(BRAND_PATTERN.brand_get_all)
    async getAllBrand({ page = 1, size = 10 }) {
        const data = await this.brandService.getAllBrand({ page, size })
        return {
            code: ERROR_CODE.SUCCESS,
            data,
        }
    }

    @MessagePattern(BRAND_PATTERN.brand_get_one)
    async getBrand(id: string) {
        const result = await this.brandService.getBrand(id)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(role.admin)
    @MessagePattern(BRAND_PATTERN.brand_update)
    async updateBrand(data) {
        const brand = await this.brandService.findOneBy({
            id: data.id,
        })
        if (brand) {
            await this.brandService.updateBrand(data)
            return {
                code: ERROR_CODE.SUCCESS,
            }
        } else {
            return {
                code: ERROR_CODE.FAIL,
                message: 'brand is not exist',
            }
        }
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(role.admin)
    @MessagePattern(BRAND_PATTERN.brand_delete)
    async deleteBrand(id: string) {
        await this.brandService.deleteBrand(id)
        return {
            code: ERROR_CODE.SUCCESS,
        }
    }
}

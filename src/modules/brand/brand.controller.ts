import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common'
import { BrandService } from './brand.service'
import { UseRoles } from '@src/utils/decorators/role.decorator'
import { role } from '@src/utils/enums/role.enum'
import { JwtAuthGuard } from '@src/utils/guards/jwt.guard'
import { RolesGuard } from '@src/utils/guards/roles.guard'
import { ERROR_CODE } from '@src/utils/enums/error_code.enum'

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @UseRoles(role.admin)
    @Post('create')
    async createBrand(@Body() data) {
        const brand = await this.brandService.createBrand(data)
        return {
            code: ERROR_CODE.SUCCESS,
            data: brand,
        }
    }

    @Post('get-all')
    async getAllBrand(@Body() { page = 1, size = 10 }) {
        const data = await this.brandService.getAllBrand({ page, size })
        return {
            code: ERROR_CODE.SUCCESS,
            data,
        }
    }

    @Get('get-one/:id')
    async getBrand(@Param() id: string) {
        const result = await this.brandService.getBrand(id)
        return {
            code: ERROR_CODE.SUCCESS,
            data: result,
        }
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @UseRoles(role.admin)
    @Put('update')
    async updateBrand(@Body() data) {
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
    @UseRoles(role.admin)
    @Put('delete/:id')
    async deleteBrand(@Param() id: string) {
        await this.brandService.deleteBrand(id)
        return {
            code: ERROR_CODE.SUCCESS,
        }
    }
}

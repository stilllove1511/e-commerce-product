import { Controller, UseFilters } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CompanyService } from './company.service';
import { CompanyResponse } from './company.response';
@Controller()
export class CompanyController {
    constructor(
        private readonly companyService: CompanyService,
        private readonly companyResponse: CompanyResponse,
    ) {}

    @MessagePattern('list_all_company')
    getAllCompany() {
        return this.companyService.getAllCompany();
    }

    @MessagePattern('get_company')
    async getCompany(id: string) {
        const data = await this.companyService.getCompany(id);
        if (data)
            return {
                status: 200,
                data,
            };
        else return this.companyResponse.notExist;
    }

    @MessagePattern('create_company')
    async createCompany(params) {
        const data = await this.companyService.createCompany(params);
        return {
            code: 200,
            message: 'ok',
            data,
        };
    }

    @MessagePattern('update_company')
    async updateCompany(params) {
        const data = await this.companyService.updateCompany(params);
        return {
            code: 200,
            message: 'ok',
            data,
        };
    }

    @MessagePattern('delete_company')
    async deleteCompany(id: string) {
        const data = this.companyService.deleteCompany(id);
        return {
            code: 200,
            message: 'ok',
            data,
        };
    }
}

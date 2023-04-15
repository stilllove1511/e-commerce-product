import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CompanyService } from './company.service';

@Controller()
export class CompanyController {
  constructor(
    private readonly companyService:CompanyService 
  ){}
  @MessagePattern('get_company')
  getCompany(id:string) {
    return this.companyService.getCompany(id);
  }

  @MessagePattern('create_company')
  createCompany(data) {
    return this.companyService.createCompany(data);
  }

  @MessagePattern('update_company')
  updateCompany(data) {
    return this.companyService.updateCompany(data);
  }
}
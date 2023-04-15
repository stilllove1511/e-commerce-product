import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CompanyService } from './company.service';

@Controller()
export class CompanyController {
  constructor(
    private readonly companyService:CompanyService 
  ){}
  @MessagePattern('company')
  getCompany(id:string) {
    return this.companyService.getCompany(id);
  }
}
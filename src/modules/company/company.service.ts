import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyEntity } from 'src/core/database/entities/company.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(CompanyEntity) private readonly companyRepository: Repository<CompanyEntity>
    ){}

    async getCompany(id:string) {
        return this.companyRepository.findOneBy({id})
    }
    async createCompany(data) {
        return this.companyRepository.insert(data)
    }
    async updateCompany(data) {
        return this.companyRepository.save(data)
    }
}

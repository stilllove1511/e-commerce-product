import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyEntity } from 'src/core/database/entities/company.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(CompanyEntity)
        private readonly companyRepository: Repository<CompanyEntity>,
    ) {}

    async getAllCompany() {
        const result = await this.companyRepository.findAndCount({
            select: [
                'id',
                'createdAt',
                'updatedAt',
                'title',
                'registrationNumber',
                'organizationName',
                'category',
                'overview',
                'foundedDate',
                'operatingStatus',
                'phoneNumber',
                'email',
                'website',
                'ipoStatus',
                'ipoPublic',
                'rivalNote',
                'numberOfEmployee',
                'image',
                'uniqueName',
            ],
            order: { createdAt: 'DESC' },
        });
        const total = result[1];
        const data = result[0];
        return {
            total,
            data,
        };
    }
    async getCompany(id: string) {
        return this.companyRepository.findOneBy({ id });
    }
    async createCompany(data) {
        return this.companyRepository.save(data);
    }
    async updateCompany(data) {
        return this.companyRepository.save(data);
    }
    async deleteCompany(id: string) {
        return this.companyRepository.softDelete(id);
    }
}

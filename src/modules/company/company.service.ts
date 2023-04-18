import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Company } from 'src/core/database/entities/company.entity'
import { CompanyResponse } from './company.response'
import { Round } from '@src/core/database/entities/round.entity'
import { Investor } from '@src/core/database/entities/investor.entity'

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>,
        private readonly response: CompanyResponse, // private readonly roundRepository: Repository<Round>,
    ) // private readonly investorRepository: Repository<Investor>,
    {}

    // async createRound(rounds, companyId) {
    //     for (let i = 0; i < rounds.length; i++) {
    //         const roundsCreated = await this.roundRepository.save({
    //             roundName: rounds[i].roundName,
    //             transactionName: rounds[i].transactionName,
    //             announcedDate: rounds[i].announcedDate,
    //             moneyRaisedCurrency: rounds[i].currency,
    //             moneyRaised: rounds[i].moneyRaised,
    //         })

    //         if (rounds[i].investors && rounds[i].investors.length > 0) {
    //             const { investors } = rounds[i]
    //             for (let j = 0; j < investors.length; j++) {
    //                 const itemExist = await this.investorRepository.count({
    //                     where: {
    //                         id: investors[j].investorId,
    //                     },
    //                 })
    //                 if (itemExist === 0) {
    //                     throw new Error('INVESTOR_IS_NOT_EXIST')
    //                 }
    //             }
    //             let listRoundInvestorCreate = []
    //             for (let j = 0; j < investors.length; j++) {
    //                 const item = dbModels.roundInvestorModel.create({
    //                     roundId: roundsCreated.id,
    //                     investorId: investors[j].investorId,
    //                     freeName: investors[j].freeName,
    //                     freeUrl: investors[j].freeUrl,
    //                 })
    //                 listRoundInvestorCreate.push(item)
    //             }
    //             await Promise.all(listRoundInvestorCreate)
    //         }
    //         await dbModels.roundCompanyModel.create({
    //             companyId,
    //             roundId: roundsCreated.id,
    //         })
    //     }
    // }

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
        })
        const total = result[1]
        const data = result[0]
        return {
            total,
            data,
        }
    }
    async getCompany(id: string) {
        return this.companyRepository.findOneBy({ id })
    }
    async createCompany(data) {
        try {
            const isCompanyNameExist = await this.companyRepository.findOneBy({
                uniqueName: data.uniqueName,
            })
            if (isCompanyNameExist) {
                return this.response.nameExist
            }

            const companyCreated = await this.companyRepository.save(data)
            return {
                status: 'ok',
                data: companyCreated,
            }
        } catch (error) {
            return this.response[error.message]
        }
    }
    async updateCompany(data) {
        return this.companyRepository.save(data)
    }
    async deleteCompany(id: string) {
        return this.companyRepository.softDelete(id)
    }
}

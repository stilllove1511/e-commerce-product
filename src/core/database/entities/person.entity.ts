import { NullableColumn } from '@src/utils/decorators/entities.decorator'
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToMany,
} from 'typeorm'
import { Company } from './company.entity'

@Entity({ name: 'people' })
export class Person {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date

    @DeleteDateColumn()
    deletedAt?: Date

    @NullableColumn()
    title: string

    @NullableColumn()
    uniqueName: string

    @NullableColumn()
    position: string

    @NullableColumn()
    firstName: string

    @NullableColumn()
    lastName: string

    @NullableColumn()
    name: string

    @NullableColumn()
    biography: string

    @NullableColumn()
    fullNameUrl: string

    @NullableColumn()
    cbRankPerson: string

    @NullableColumn()
    primaryJob: string

    @NullableColumn()
    gender: string

    @NullableColumn()
    investorType: string

    @NullableColumn()
    nickName: string

    @NullableColumn()
    email: string

    @NullableColumn()
    currentOrganizations: string

    @NullableColumn()
    phoneNumber: string

    @NullableColumn()
    description: string

    @NullableColumn()
    facebookUrl: string

    @NullableColumn()
    linkedInUrl: string

    @NullableColumn()
    twitterUrl: string

    @NullableColumn()
    instagramUrl: string

    @NullableColumn()
    image: string

    @NullableColumn()
    numberOfPortfolioCompany: string

    @NullableColumn()
    numberOfFoundedOrganization: string

    @NullableColumn()
    numberOfNewsArticle: string

    @NullableColumn()
    numberOfInvestments: string

    @NullableColumn()
    numberOfPartnerInvestments: string

    @NullableColumn()
    numberOfLeadInvestments: string

    @NullableColumn()
    numberOfDiversityInvestments: string

    @NullableColumn()
    cbRankInvestor: string

    @NullableColumn()
    mumberOfExits: string

    @NullableColumn()
    numberOfExitsIPO: string

    @NullableColumn()
    numberOfEvents: string

    @NullableColumn()
    primaryOrganization: string

    @NullableColumn()
    primaryOrganizationURL: string

    @NullableColumn()
    schoolsAttended: string

    @NullableColumn()
    location: string

    @NullableColumn()
    region: string

    @NullableColumn()
    investorStage: string

    @NullableColumn()
    website: string

    @NullableColumn()
    trendScore7Days: string

    @NullableColumn()
    trendScore30Days: string

    @NullableColumn()
    trendScore90Days: string

    @ManyToMany(() => Company, (company) => company.people)
    company: Company[]
}

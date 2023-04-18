import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToMany,
    JoinTable,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm'
import { NullableColumn } from '@src/utils/decorators/entities.decorator'
import { Area } from './area.entity'
import { Industry } from './industry.entity'
import { Investor } from './investor.entity'
import { Person } from './person.entity'
import { Round } from './round.entity'
import { Shareholder } from './shareholder.entity'
@Entity({ name: 'companies' })
export class Company {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date

    @DeleteDateColumn()
    deletedAt?: Date

    @Column({ unique: true })
    uniqueName: string

    @NullableColumn()
    title: string

    @NullableColumn()
    registrationNumber: string

    @NullableColumn({ type: 'text' })
    category: string

    @NullableColumn({ type: 'text' })
    overview: string

    @NullableColumn()
    hq: string

    @NullableColumn()
    operationArea: string

    @NullableColumn({ type: 'text' })
    ipoPublic: string

    @NullableColumn({ type: 'text' })
    missionVision: string

    @NullableColumn({ type: 'text' })
    productService: string

    @NullableColumn({ type: 'text' })
    marketAnalysis: string

    @NullableColumn({ type: 'text' })
    primaryCustomer: string

    @NullableColumn({ type: 'text' })
    factorsOfDifferent: string

    @NullableColumn({ type: 'text' })
    selfNote: string

    @NullableColumn({ type: 'text' })
    rivalNote: string

    @NullableColumn({ type: 'int' })
    totalSale: number

    @NullableColumn()
    numberOfEmployeesInEnd: string

    @NullableColumn({ type: 'text' })
    corporateAcquisition: string

    @NullableColumn()
    organizationName: string

    @NullableColumn()
    organizationNameURL: string

    @NullableColumn()
    industry: string

    @NullableColumn()
    headquarterLocation: string

    @NullableColumn()
    activelyHiring: boolean

    @NullableColumn()
    foundedDate: Date

    @NullableColumn()
    foundedDatePrecision: string

    @NullableColumn()
    numberOfEmployee: string

    @NullableColumn({ type: 'text' })
    description: string

    @NullableColumn()
    cbRankCompany: string

    @NullableColumn()
    headquarterRegion: string

    @NullableColumn()
    diversitySpotlight: string

    @NullableColumn()
    estimatedRevenueRange: string

    @NullableColumn()
    operatingStatus: boolean

    @NullableColumn()
    exitDate: Date

    @NullableColumn()
    exitDatePrecision: string

    @NullableColumn()
    closedDate: Date

    @NullableColumn()
    closedDatePrecision: string

    @NullableColumn()
    companyType: string

    @NullableColumn()
    website: string

    @NullableColumn()
    twitterUrl: string

    @NullableColumn()
    facebookUrl: string

    @NullableColumn()
    linkedInUrl: string

    @NullableColumn()
    email: string

    @NullableColumn()
    phoneNumber: string

    @NullableColumn()
    numberOfArticle: number

    @NullableColumn()
    hubTag: string

    @NullableColumn({ type: 'text' })
    fullDescription: string

    @NullableColumn()
    investorType: string

    @NullableColumn()
    investmentStage: string

    @NullableColumn()
    numberOfPortfolioOrganization: string

    @NullableColumn()
    numberOfInvestment: number

    @NullableColumn()
    numberOfLeadInvestment: number

    @NullableColumn()
    numberOfDiversityInvestment: number

    @NullableColumn()
    numberOfExit: number

    @NullableColumn()
    numberOfExitsIPO: number

    @NullableColumn()
    acceleratorProgramType: string

    @NullableColumn()
    acceleratorApplicationDeadline: Date

    @NullableColumn()
    acceleratorDuration: number

    @NullableColumn()
    schoolType: string

    @NullableColumn()
    schoolProgram: string

    @NullableColumn()
    numberOfEnrollment: number

    @NullableColumn()
    schoolMethod: string

    @NullableColumn()
    numberOfFoundersAlumni: number

    @NullableColumn()
    numberOfAlumni: number

    @NullableColumn()
    IndustryGroup: string

    @NullableColumn()
    numberOfFounder: number

    @NullableColumn()
    founder: string

    @NullableColumn()
    numberOfFundingRound: string

    @NullableColumn()
    fundingStatus: string

    @NullableColumn()
    lastFundingDate: string

    @NullableColumn()
    lastFundingAmount: string

    @NullableColumn()
    lastFundingAmountCurrency: string

    @NullableColumn()
    lastFundingAmountCurrencyUsd: string

    @NullableColumn()
    lastFundingType: string

    @NullableColumn()
    lastEquityFundingAmount: string

    @NullableColumn()
    lastEquityFundingAmountCurrency: string

    @NullableColumn()
    lastEquityFundingAmountCurrencyUsd: string

    @NullableColumn()
    lastEquityFundingType: string

    @NullableColumn()
    totalEquityFundingAmount: string

    @NullableColumn()
    totalEquityFundingAmountCurrency: string

    @NullableColumn()
    totalEquityFundingAmountCurrencyUsd: string

    @NullableColumn()
    totalFundingAmount: string

    @NullableColumn()
    totalFundingAmountCurrency: string

    @NullableColumn()
    top5Investor: string

    @NullableColumn()
    numberOfLeadInvestor: string

    @NullableColumn()
    numberOfInvestor: string

    @NullableColumn()
    numberOfAcquisition: string

    @NullableColumn()
    acquisitionStatus: string

    @NullableColumn()
    transactionName: string

    @NullableColumn()
    transactionNameUrl: string

    @NullableColumn()
    acquiredBy: string

    @NullableColumn()
    acquiredByUrl: string

    @NullableColumn()
    announcedDate: string

    @NullableColumn()
    announcedDatePrecision: string

    @NullableColumn()
    price: string

    @NullableColumn()
    priceCurrency: string

    @NullableColumn()
    priceCurrencyUsd: string

    @NullableColumn()
    acquisitionType: string

    @NullableColumn()
    acquisitionTerm: string

    @NullableColumn()
    ipoStatus: string

    @NullableColumn()
    ipoDate: string

    @NullableColumn()
    delistedDate: string

    @NullableColumn()
    delistedDatePrecision: string

    @NullableColumn()
    moneyRaisedIpo: string

    @NullableColumn()
    moneyRaisedIpoCurrency: string

    @NullableColumn()
    moneyRaisedIpoCurrencyUsd: string

    @NullableColumn()
    valuationIpo: string

    @NullableColumn()
    valuationIpoCurrency: string

    @NullableColumn()
    valuationIpoCurrencyUsd: string

    @NullableColumn()
    stockSymbol: string

    @NullableColumn()
    stockExchange: string

    @NullableColumn()
    lastLeaderShipHiring: string

    @NullableColumn()
    lastLayoffMention: string

    @NullableColumn()
    numberOfEvent: string

    @NullableColumn()
    cbRankOrganization: string

    @NullableColumn()
    cbRankSchool: string

    @NullableColumn()
    trendScore7day: string

    @NullableColumn()
    trendScore30day: string

    @NullableColumn()
    trendScore90day: string

    @NullableColumn()
    similarCompany: string

    @NullableColumn()
    contactJobDepartment: string

    @NullableColumn()
    numberOfContract: string

    @NullableColumn()
    numberOfPrivateContact: string

    @NullableColumn()
    monthlyVisit: string

    @NullableColumn()
    averageVisits6month: string

    @NullableColumn()
    monthlyVisitGrowth: string

    @NullableColumn()
    visitDuration: string

    @NullableColumn()
    visitDurationGrowth: string

    @NullableColumn()
    pageViewsVisit: string

    @NullableColumn()
    pageViewVisitGrowth: string

    @NullableColumn()
    bounceRate: string

    @NullableColumn()
    bounceRateGrowth: string

    @NullableColumn()
    globalTrafficRank: string

    @NullableColumn()
    monthlyRankChange: string

    @NullableColumn()
    monthlyRankGrowth: string

    @NullableColumn()
    activeTechCount: string

    @NullableColumn()
    numberOfApp: string

    @NullableColumn()
    downloadsLast30Day: string

    @NullableColumn()
    totalProductsActive: string

    @NullableColumn()
    patentsGranted: string

    @NullableColumn()
    trademarksRegistered: string

    @NullableColumn()
    mostpopularPatentClass: string

    @NullableColumn()
    mostPopularTrademarkClass: string

    @NullableColumn()
    itSpend: string

    @NullableColumn()
    mostRecentValuationRange: string

    @NullableColumn()
    dateOfMostRecentValuatinon: string

    @NullableColumn()
    numberOfPrivateNote: string

    @NullableColumn()
    tag: string

    @NullableColumn()
    image: string

    @NullableColumn()
    investorId: string

    @ManyToMany(() => Area, (area) => area.company)
    @JoinTable()
    areas: Area[]

    @ManyToMany(() => Industry, (industry) => industry.company)
    @JoinTable()
    industries: Industry[]

    @ManyToMany(() => Person, (person) => person.company)
    @JoinTable()
    people: Person[]

    @OneToOne(() => Investor)
    @JoinColumn()
    investor: Investor

    @ManyToMany(() => Round, (round) => round.company)
    @JoinTable()
    rounds: Round[]

    @ManyToMany(() => Shareholder, (shareholder) => shareholder.company)
    @JoinTable()
    shareholder: Shareholder[]
}

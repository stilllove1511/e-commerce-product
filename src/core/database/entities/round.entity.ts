import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToMany,
} from 'typeorm'
import { NullableColumn } from '@src/utils/decorators/entities.decorator'
import { Company } from './company.entity'

@Entity()
export class Round {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date

    @DeleteDateColumn()
    deletedAt?: Date

    @ManyToMany(() => Company)
    company: Company[]

    @NullableColumn()
    roundName: string

    @NullableColumn()
    transactionName: string

    @NullableColumn()
    moneyRaised: string

    @NullableColumn()
    moneyRaisedCurrency: string

    @NullableColumn()
    moneyRaisedCurrencyUsd: string

    @NullableColumn()
    announcedDate: string

    @NullableColumn()
    fundingType: string

    @NullableColumn()
    fundingStage: string

    @NullableColumn()
    fundingStatus: string

    @NullableColumn()
    preMoney: string

    @NullableColumn()
    preMoneyCurrency: string

    @NullableColumn()
    preMoneyCurrencyUsd: string

    @NullableColumn()
    equityOnlyFunding: string

    @NullableColumn()
    companyName: string

    @NullableColumn()
    leadInvestorName: string
}

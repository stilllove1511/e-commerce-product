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
@Entity({ name: 'industries' })
export class Industry {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date

    @DeleteDateColumn()
    deletedAt?: Date

    @NullableColumn()
    name: string

    @NullableColumn()
    slug: string

    @NullableColumn({ type: 'text' })
    description: string

    @NullableColumn()
    parentCategory: string

    @NullableColumn()
    isRestrictAccess: boolean

    @ManyToMany(() => Company, (company) => company.industries)
    company: Company[]
}

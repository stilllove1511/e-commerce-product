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
export class Shareholder {
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
}

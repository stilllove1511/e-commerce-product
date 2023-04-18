import { NullableColumn } from '@src/utils/decorators/entities.decorator'
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm'

@Entity({ name: 'investors' })
export class Investor {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date

    @DeleteDateColumn()
    deletedAt?: Date

    @NullableColumn({ type: 'text' })
    mission: string

    @NullableColumn({ type: 'text' })
    vision: string
}

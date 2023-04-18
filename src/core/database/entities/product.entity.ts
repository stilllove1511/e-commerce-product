import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    JoinColumn,
} from 'typeorm'
import { NullableColumn } from '@src/utils/decorators/entities.decorator'
import { Attribute } from './attibute.entity'
import { Category } from './category.entity'
import { Brand } from './brand.entity'

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
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
    price: number

    @ManyToMany(() => Attribute)
    @JoinTable()
    atttributes: Attribute[]

    @ManyToMany(() => Category)
    categories: Category[]

    @ManyToOne(() => Brand)
    @JoinColumn()
    brand: Brand
}

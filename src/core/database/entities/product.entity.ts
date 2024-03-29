import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    OneToMany,
} from 'typeorm'
import { NullableColumn } from '@src/utils/decorators/entities.decorator'
import { Attribute } from './attribute.entity'
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

    @OneToMany(() => Attribute, (attribute) => attribute.product)
    attributes: Attribute[]

    @ManyToMany(() => Category)
    @JoinTable({ name: 'product_category' })
    categories: Category[]

    @ManyToOne(() => Brand)
    brand: Brand
}

import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    OneToMany,
    ManyToMany,
    JoinTable,
} from 'typeorm'
import { NullableColumn } from '@src/utils/decorators/entities.decorator'
import { Product } from './product.entity'

@Entity()
export class Category {
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
    description: string

    @ManyToOne(() => Category, (category) => category.children)
    parent: Category

    @OneToMany(() => Category, (category) => category.parent)
    children: Category[]

    @ManyToMany(() => Product)
    @JoinTable({ name: 'product_category' })
    products: Product[]
}

import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { NullableColumn } from '@src/utils/decorators/entities.decorator';
@Entity({ name: 'areas' })
export class Area {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @NullableColumn()
    name: string;

    @NullableColumn()
    slug: string;

    @NullableColumn()
    description: string;

    @NullableColumn()
    isRestrictAccess: boolean;

    @ManyToOne(() => Area, (area) => area.childrenCategory)
    @JoinColumn({ name: 'parentCategory' })
    parentCategory: Area;

    @OneToMany(() => Area, (area) => area.parentCategory)
    childrenCategory: Area[];
}

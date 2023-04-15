import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn
} from 'typeorm';
@Entity({ name: 'companies' })
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid',{ name: 'id' })
  id: string;

  @Column({ unique: true, length: 30, type: 'varchar' })
  uniqueName: string;

  @DeleteDateColumn()
  deletedAt?: Date;
}

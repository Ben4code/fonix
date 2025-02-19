import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { Category } from 'src/datasets/categories/entities/category.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  price: number;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable({ name: 'product_to_category' })
  categories: Category[];

  @Column(() => RegistTableDates, { prefix: false })
  registerTableDates: RegistTableDates;
}

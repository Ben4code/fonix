import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { Category } from 'src/datasets/categories/entities/category.entity';
import { OrderItem } from 'src/datasets/orders/entities/order-item.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
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

  @OneToMany(() => OrderItem, (item) => item.product)
  items: OrderItem[];

  @Column(() => RegistTableDates, { prefix: false })
  registerTableDates: RegistTableDates;

  get orders() {
    return this.items.map((item) => item.order);
  }
}

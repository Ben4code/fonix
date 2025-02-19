import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/datasets/products/entities/product.entity';

@Entity()
export class OrderItem {
  @PrimaryColumn()
  orderId: number;

  @PrimaryColumn()
  productId: number;

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.items)
  product: Product;

  @Column()
  quantity: number;

  @Column({ precision: 6, scale: 2, type: 'decimal' })
  price: number;
}

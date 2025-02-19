import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderStatus } from '../enus/order-status.enum';
import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { User } from 'src/datasets/users/entities/user.entity';
import { Payment } from 'src/datasets/payments/entities/payment.entity';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.AWAITING_PAYMENT,
  })
  status: OrderStatus;

  @OneToOne(() => Payment, (payment) => payment.order, {
    nullable: false,
    cascade: true,
  })
  payment: Payment;

  @ManyToOne(() => User, (customer) => customer.orders, { nullable: false })
  customer: User;

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
  items: OrderItem[];

  @Column(() => RegistTableDates, { prefix: false })
  registerTableDates: RegistTableDates;
}

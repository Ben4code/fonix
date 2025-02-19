import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderStatus } from '../enus/order-status.enum';
import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { User } from 'src/datasets/users/entities/user.entity';
import { Payment } from 'src/datasets/payments/entities/payment.entity';

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

  @Column(() => RegistTableDates, { prefix: false })
  registerTableDates: RegistTableDates;
}

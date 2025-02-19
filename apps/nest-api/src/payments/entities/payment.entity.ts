import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { Order } from 'src/orders/entities/order.entity';
// import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Order, (order) => order.payment, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  order: Order;

  // @ManyToOne(() => User, (customer) => customer.orders, { nullable: false })
  // customer: User;

  @Column(() => RegistTableDates, { prefix: false })
  registerTableDates: RegistTableDates;
}

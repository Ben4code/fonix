import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../enus/order-status.enum';
import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { User } from 'src/users/entities/user.entity';

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

  @ManyToOne(() => User, (customer) => customer.orders, { nullable: false })
  customer: User;

  @Column(() => RegistTableDates, { prefix: false })
  registerTableDates: RegistTableDates;
}

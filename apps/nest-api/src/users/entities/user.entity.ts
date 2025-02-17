import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column(() => RegistTableDates, { prefix: false })
  registerTableDates: RegistTableDates;
}

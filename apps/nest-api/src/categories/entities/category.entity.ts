import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column(() => RegistTableDates, { prefix: false })
  registerTableDates: RegistTableDates;
}

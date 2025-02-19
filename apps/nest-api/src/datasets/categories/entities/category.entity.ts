import { RegistTableDates } from 'src/common/table-fields/register-table-dates.field';
import { Product } from 'src/datasets/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];

  @Column(() => RegistTableDates, { prefix: false })
  registerTableDates: RegistTableDates;
}

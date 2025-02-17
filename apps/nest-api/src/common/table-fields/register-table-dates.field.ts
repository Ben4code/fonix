import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class RegistTableDates {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

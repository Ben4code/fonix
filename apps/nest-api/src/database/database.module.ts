import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'fonix_db',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'fonix_user',
      password: 'S3cret',
      // username: process.env.POSTGRES_USER,
      // password: process.env.POSTGRES_PASSWORD,
      autoLoadEntities: true,
    }),
  ],
  exports: [DatabaseModule],
})
export class DatabaseModule {}

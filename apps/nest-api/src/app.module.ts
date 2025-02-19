import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './datasets/users/users.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './datasets/orders/orders.module';
import { PaymentsModule } from './datasets/payments/payments.module';
import { CategoriesModule } from './datasets/categories/categories.module';
import { ProductsModule } from './datasets/products/products.module';
import configurations from './config/configuration';

@Module({
  imports: [
    UsersModule,
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configurations],
    }),
    DatabaseModule,
    OrdersModule,
    PaymentsModule,
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

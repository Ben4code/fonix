import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/custom-dto/pagination.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  public findAll(paginationDto: PaginationDto) {
    const { limit, offset } = paginationDto;
    return this.paymentRepository.find({
      take: limit,
      skip: offset,
    });
  }

  public async findOne(id: number) {
    const payment = await this.paymentRepository.findOne({
      where: {
        id,
      },
    });

    if (!payment) {
      throw new NotFoundException('Payment details not found.');
    }

    return payment;
  }

  public create(createPaymentDto: CreatePaymentDto) {
    return this.paymentRepository.save(createPaymentDto);
  }

  public async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.paymentRepository.preload({
      id,
      ...updatePaymentDto,
    });

    return this.paymentRepository.save(payment);
  }

  public async delete(id: number) {
    const payment = await this.findOne(id);
    return this.paymentRepository.remove(payment);
  }
}

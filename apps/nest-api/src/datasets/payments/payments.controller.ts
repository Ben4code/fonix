import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaginationDto } from 'src/common/custom-dto/pagination.dto';
import { IdDto } from 'src/common/custom-dto/id.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.paymentsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Query() { id }: IdDto) {
    return this.paymentsService.findOne(id);
  }

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Patch(':id')
  update(@Param() { id }: IdDto, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(id, updatePaymentDto);
  }

  @Delete(':id')
  delete(@Query() { id }: IdDto) {
    return this.paymentsService.delete(id);
  }
}

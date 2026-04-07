import { BaseRepository } from '../base/base.repository';
import { EntityRepository } from 'typeorm';
import { Order } from './entities/order.entity';

@EntityRepository(Order)
export class OrderRepository extends BaseRepository<Order> {}

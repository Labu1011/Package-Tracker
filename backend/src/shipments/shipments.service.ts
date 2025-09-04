import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shipment } from './models/shipment.model';
import { Repository } from 'typeorm';
import { CreateShipmentDto } from './dto/create-shipment.dto';

@Injectable()
export class ShipmentsService {
  constructor(
    @InjectRepository(Shipment)
    private readonly shipmentRepo: Repository<Shipment>,
  ) {}

  async create(input: CreateShipmentDto): Promise<Shipment> {
    const shipment = this.shipmentRepo.create({
      ...input,
    });

    return this.shipmentRepo.save(shipment);
  }

  async findAll(): Promise<Shipment[]> {
    return this.shipmentRepo.find();
  }

  async findOne(id: number): Promise<Shipment> {
    const shipment = await this.shipmentRepo.findOneBy({ id });

    if (!shipment) {
      throw new NotFoundException(`Shipment with ID ${id} not found!`);
    }

    return shipment;
  }
}

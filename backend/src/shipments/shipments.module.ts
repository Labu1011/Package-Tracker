import { Module } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ShipmentsResolver } from './shipments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './models/shipment.model';

@Module({
  imports: [TypeOrmModule.forFeature([Shipment])],
  providers: [ShipmentsResolver, ShipmentsService],
})
export class ShipmentsModule {}

import { Module } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ShipmentsResolver } from './shipments.resolver';

@Module({
  providers: [ShipmentsResolver, ShipmentsService],
})
export class ShipmentsModule {}

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShipmentsService } from './shipments.service';
import { Shipment } from './models/shipment.model';
import { CreateShipmentDto } from './dto/create-shipment.dto';

@Resolver(() => Shipment)
export class ShipmentsResolver {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Mutation(() => Shipment)
  createShipment(@Args('input') input: CreateShipmentDto) {
    return this.shipmentsService.create(input);
  }

  @Query(() => [Shipment])
  shipments() {
    return this.shipmentsService.findAll();
  }

  @Query(() => Shipment)
  shipment(@Args('id', { type: () => Int }) id: number) {
    return this.shipmentsService.findOne(id);
  }
}

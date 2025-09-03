import { Resolver } from '@nestjs/graphql';
import { Shipment } from './models/shipment.model';

@Resolver(() => Shipment)
export class ShipmentResolver {}

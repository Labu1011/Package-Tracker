import { Resolver } from '@nestjs/graphql';
import { ShipmentsService } from './shipments.service';

@Resolver()
export class ShipmentsResolver {
  constructor(private readonly shipmentsService: ShipmentsService) {}
}

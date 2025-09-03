import { InputType, PartialType } from '@nestjs/graphql';
import { CreateShipmentDto } from './create-shipment.dto';

@InputType()
export class UpdateShipmentDto extends PartialType(CreateShipmentDto) {}

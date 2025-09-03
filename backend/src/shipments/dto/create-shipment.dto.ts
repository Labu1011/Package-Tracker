import { Field, InputType } from '@nestjs/graphql';
import { ShipmentStatus } from 'src/common/enums/shipment-status.enum';

@InputType()
export class CreateShipmentDto {
  @Field()
  sender: string;

  @Field()
  receiver: string;

  @Field(() => ShipmentStatus, { defaultValue: ShipmentStatus.PENDING })
  status?: ShipmentStatus;

  @Field(() => [String], { nullable: true })
  checkpoints?: string[];
}

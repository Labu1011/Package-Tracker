import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ShipmentStatus } from 'src/common/enums/shipment-status.enum';
import { nanoid } from 'nanoid';

@ObjectType()
@Entity()
export class Shipment {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  trackingId: string;

  @Field(() => ShipmentStatus)
  @Column({
    type: 'enum',
    enum: ShipmentStatus,
    default: ShipmentStatus.PENDING,
  })
  status: ShipmentStatus;

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true, nullable: true })
  checkpoints?: string[];

  @Field()
  @Column()
  sender: string;

  @Field()
  @Column()
  receiver: string;

  @BeforeInsert()
  generateTrackingId() {
    this.trackingId = `PKG-${nanoid(10)}`;
  }
}

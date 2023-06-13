import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class ShoeBrand {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;
}

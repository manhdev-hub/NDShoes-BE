import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Shoe {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  idShoeBrand: ObjectId;
}

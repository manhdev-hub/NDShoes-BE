import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { MenuChildren } from '../interfaces/menu-children';

@Entity()
export class Menu {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  children?: MenuChildren[];
}

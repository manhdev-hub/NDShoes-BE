import { Injectable } from '@nestjs/common';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Shoe } from './entities/shoe.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ShoesService {
  constructor(
    @InjectRepository(Shoe)
    private readonly shoeRepository: MongoRepository<Shoe>,
  ) {}

  create(createShoeDto: CreateShoeDto) {
    return 'This action adds a new shoe';
  }

  findAll(): Promise<Shoe[]> {
    return this.shoeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} shoe`;
  }

  update(id: number, updateShoeDto: UpdateShoeDto) {
    return `This action updates a #${id} shoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoe`;
  }
}

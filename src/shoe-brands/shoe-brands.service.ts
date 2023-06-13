import { Injectable } from '@nestjs/common';
import { CreateShoeBrandDto } from './dto/create-shoe-brand.dto';
import { UpdateShoeBrandDto } from './dto/update-shoe-brand.dto';
import { ShoeBrand } from './entities/shoe-brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ShoeBrandsService {
  constructor(
    @InjectRepository(ShoeBrand)
    private readonly shoeBrandsRepository: MongoRepository<ShoeBrand>,
  ) {}

  create(createShoeBrandDto: CreateShoeBrandDto) {
    return 'This action adds a new shoeBrand';
  }

  findAll(): Promise<ShoeBrand[]> {
    return this.shoeBrandsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} shoeBrand`;
  }

  update(id: number, updateShoeBrandDto: UpdateShoeBrandDto) {
    return `This action updates a #${id} shoeBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoeBrand`;
  }
}

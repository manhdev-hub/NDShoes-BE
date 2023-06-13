import { Injectable } from '@nestjs/common';
import { CreateShoeBrandDto } from './dto/create-shoe-brand.dto';
import { UpdateShoeBrandDto } from './dto/update-shoe-brand.dto';

@Injectable()
export class ShoeBrandsService {
  create(createShoeBrandDto: CreateShoeBrandDto) {
    return 'This action adds a new shoeBrand';
  }

  findAll() {
    return `This action returns all shoeBrands`;
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

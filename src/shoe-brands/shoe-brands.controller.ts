import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShoeBrandsService } from './shoe-brands.service';
import { CreateShoeBrandDto } from './dto/create-shoe-brand.dto';
import { UpdateShoeBrandDto } from './dto/update-shoe-brand.dto';
import { ShoeBrand } from './entities/shoe-brand.entity';

@Controller('shoe-brands')
export class ShoeBrandsController {
  constructor(private readonly shoeBrandsService: ShoeBrandsService) {}

  @Post()
  create(@Body() createShoeBrandDto: CreateShoeBrandDto) {
    return this.shoeBrandsService.create(createShoeBrandDto);
  }

  @Get()
  findAll(): Promise<ShoeBrand[]> {
    return this.shoeBrandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoeBrandsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShoeBrandDto: UpdateShoeBrandDto,
  ) {
    return this.shoeBrandsService.update(+id, updateShoeBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoeBrandsService.remove(+id);
  }
}

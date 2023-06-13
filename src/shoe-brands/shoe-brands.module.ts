import { Module } from '@nestjs/common';
import { ShoeBrandsService } from './shoe-brands.service';
import { ShoeBrandsController } from './shoe-brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoeBrand } from './entities/shoe-brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoeBrand])],
  controllers: [ShoeBrandsController],
  providers: [ShoeBrandsService],
})
export class ShoeBrandsModule {}

import { Module } from '@nestjs/common';
import { ShoeBrandsService } from './shoe-brands.service';
import { ShoeBrandsController } from './shoe-brands.controller';

@Module({
  controllers: [ShoeBrandsController],
  providers: [ShoeBrandsService]
})
export class ShoeBrandsModule {}

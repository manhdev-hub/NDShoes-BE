import { Test, TestingModule } from '@nestjs/testing';
import { ShoeBrandsController } from './shoe-brands.controller';
import { ShoeBrandsService } from './shoe-brands.service';

describe('ShoeBrandsController', () => {
  let controller: ShoeBrandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoeBrandsController],
      providers: [ShoeBrandsService],
    }).compile();

    controller = module.get<ShoeBrandsController>(ShoeBrandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

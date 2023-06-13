import { Test, TestingModule } from '@nestjs/testing';
import { ShoeBrandsService } from './shoe-brands.service';

describe('ShoeBrandsService', () => {
  let service: ShoeBrandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoeBrandsService],
    }).compile();

    service = module.get<ShoeBrandsService>(ShoeBrandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

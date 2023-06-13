import { PartialType } from '@nestjs/mapped-types';
import { CreateShoeBrandDto } from './create-shoe-brand.dto';

export class UpdateShoeBrandDto extends PartialType(CreateShoeBrandDto) {}

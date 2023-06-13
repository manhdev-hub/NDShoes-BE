import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoeBrandsModule } from './shoe-brands/shoe-brands.module';

@Module({
  imports: [ShoeBrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

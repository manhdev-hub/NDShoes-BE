import { Injectable } from '@nestjs/common';

export type AppInit = {
  name: string;
  author: string;
  description: string;
};

@Injectable()
export class AppService {
  getHello(): AppInit {
    return {
      name: 'ND shoes',
      author: 'Harding Pham',
      description:
        'The First Antimicrobial, Fluid Resistant Shoe, Built To Look Good On And Off The Clock. We Blend Fashion And Functionality To Create A Shoe Just As Versatile As You. Unmatched Comfort. Made For Everywhere. First Antimicrobial Shoes.',
    };
  }
}

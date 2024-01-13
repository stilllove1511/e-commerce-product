import { Test } from '@nestjs/testing';

import { ProductService } from './product.service';

describe('Subscription Service', () => {
  let productService: ProductService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        // imports: [TypeOrmModule.forFeature([Product, Attribute])],
    // controllers: [ProductController],
    providers: [ProductService],
    }).compile();

    productService =
      moduleRef.get<ProductService>(ProductService);
  });
});

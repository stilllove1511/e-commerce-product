import { Module } from '@nestjs/common'
import { ORMModule } from './core/database/orm.module'
import { ConfigModule } from '@nestjs/config'
import { ProductModule } from './modules/product/product.module'
import { BrandModule } from './modules/brand/brand.module'
import { CategoryModule } from './modules/category/category.module'
import { EurekaModule } from 'nestjs-eureka'
import { config } from 'dotenv'
config()

@Module({
    imports: [
        ConfigModule.forRoot(),
        ORMModule,
        ProductModule,
        BrandModule,
        CategoryModule,
        EurekaModule.forRoot({
            eureka: {
                host: process.env.EUREKA_HOST,
                port: process.env.EUREKA_PORT,
                registryFetchInterval: 1000,
                servicePath: '/eureka/apps/',
                maxRetries: 3,
            },
            service: {
                name: 'product',
                port: +process.env.PORT,
            },
            clientLogger: {
                debug: () => false,
                error: console.log,
                info: () => false,
                warn: console.log,
            },
        }),
    ],
})
export class AppModule {}

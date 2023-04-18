import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from '@src/core/database/entities/area.entity';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Area])],
    controllers: [AreaController],
    providers: [AreaService],
})
export class AreaModule {}

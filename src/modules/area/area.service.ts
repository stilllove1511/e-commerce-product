import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from '@src/core/database/entities/area.entity';

@Injectable()
export class AreaService {
    constructor(
        @InjectRepository(Area)
        private readonly areaRepository: Repository<Area>,
    ) {}

    async getAllArea({ page = 1, size = 10 }) {
        const skip = (page - 1) * size;
        const take = size;
        const result = await this.areaRepository.findAndCount({
            take,
            skip: skip,
            select: [
                'id',
                'createdAt',
                'updatedAt',
                'deletedAt',
                'name',
                'slug',
                'parentCategory',
                'description',
                'isRestrictAccess',
            ],
            relations: ['company'],
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            total: result[1],
            data: result[0],
        };
    }
}

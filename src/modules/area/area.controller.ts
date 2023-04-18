import { Controller } from '@nestjs/common';
import { AreaService } from './area.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AreaController {
    constructor(private readonly areaService: AreaService) {}

    @MessagePattern('get_all_area')
    getAllArea({ page, size }: { page: number; size: number }) {
        return this.areaService.getAllArea({
            page,
            size,
        });
    }
}

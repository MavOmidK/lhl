import {Controller, Get, Param} from '@nestjs/common';
import { FeatureManagerService } from './feature-manager.service';
import {IManager} from '@lhl/shared/domain';

@Controller('feature-manager')
export class FeatureManagerController {
  constructor(private featureManagerService: FeatureManagerService) {}

  @Get('')
  getAll(): Array<IManager> {
    return this.featureManagerService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IManager {
    return <IManager>this.featureManagerService.getOne(id);
  }
}

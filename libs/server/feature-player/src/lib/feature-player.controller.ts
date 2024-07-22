import {Controller, Get, Param} from '@nestjs/common';
import { FeaturePlayerService } from './feature-player.service';
import {IPlayer} from '@lhl/shared/domain';

@Controller('feature-player')
export class FeaturePlayerController {
  constructor(private featurePlayerService: FeaturePlayerService) {}

  @Get('')
  getAll(): Array<IPlayer> {
    return this.featurePlayerService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IPlayer {
    return <IPlayer>this.featurePlayerService.getOne(id);
  }
}

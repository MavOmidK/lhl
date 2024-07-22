import {Controller, Get, Param} from '@nestjs/common';
import { FeatureTeamService } from './feature-team.service';
import { ITeam } from '@lhl/shared/domain';

@Controller('teams')
export class FeatureTeamController {
  constructor(private featureTeamService: FeatureTeamService) {}

  @Get('')
  getAll(): Array<ITeam> {
    return this.featureTeamService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): ITeam {
    return <ITeam>this.featureTeamService.getOne(id);
  }
}

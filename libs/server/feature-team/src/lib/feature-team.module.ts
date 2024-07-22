import { Module } from '@nestjs/common';
import { FeatureTeamController } from './feature-team.controller';
import { FeatureTeamService } from './feature-team.service';

@Module({
  controllers: [FeatureTeamController],
  providers: [FeatureTeamService],
  exports: [FeatureTeamService],
})
export class FeatureTeamModule {}

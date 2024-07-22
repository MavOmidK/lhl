import { Test } from '@nestjs/testing';
import { FeatureTeamController } from './feature-team.controller';
import { FeatureTeamService } from './feature-team.service';

describe('FeatureTeamController', () => {
  let controller: FeatureTeamController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeatureTeamService],
      controllers: [FeatureTeamController],
    }).compile();

    controller = module.get(FeatureTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

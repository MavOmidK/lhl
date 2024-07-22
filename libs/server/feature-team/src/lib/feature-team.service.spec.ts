import { Test } from '@nestjs/testing';
import { FeatureTeamService } from './feature-team.service';

describe('FeatureTeamService', () => {
  let service: FeatureTeamService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeatureTeamService],
    }).compile();

    service = module.get(FeatureTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

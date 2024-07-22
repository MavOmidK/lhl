import { Test } from '@nestjs/testing';
import { FeaturePlayerService } from './feature-player.service';

describe('FeaturePlayerService', () => {
  let service: FeaturePlayerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeaturePlayerService],
    }).compile();

    service = module.get(FeaturePlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

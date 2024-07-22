import { Test } from '@nestjs/testing';
import { FeatureManagerService } from './feature-manager.service';

describe('FeatureManagerService', () => {
  let service: FeatureManagerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeatureManagerService],
    }).compile();

    service = module.get(FeatureManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

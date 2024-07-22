import { Test } from '@nestjs/testing';
import { FeatureManagerController } from './feature-manager.controller';
import { FeatureManagerService } from './feature-manager.service';

describe('FeatureManagerController', () => {
  let controller: FeatureManagerController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeatureManagerService],
      controllers: [FeatureManagerController],
    }).compile();

    controller = module.get(FeatureManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

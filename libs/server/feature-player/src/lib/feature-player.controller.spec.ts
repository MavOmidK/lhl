import { Test } from '@nestjs/testing';
import { FeaturePlayerController } from './feature-player.controller';
import { FeaturePlayerService } from './feature-player.service';

describe('FeaturePlayerController', () => {
  let controller: FeaturePlayerController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeaturePlayerService],
      controllers: [FeaturePlayerController],
    }).compile();

    controller = module.get(FeaturePlayerController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

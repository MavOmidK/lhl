import { Module } from '@nestjs/common';
import { FeaturePlayerController } from './feature-player.controller';
import { FeaturePlayerService } from './feature-player.service';

@Module({
  controllers: [FeaturePlayerController],
  providers: [FeaturePlayerService],
  exports: [FeaturePlayerService],
})
export class FeaturePlayerModule {}

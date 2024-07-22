import { Module } from '@nestjs/common';
import { FeatureManagerController } from './feature-manager.controller';
import { FeatureManagerService } from './feature-manager.service';

@Module({
  controllers: [FeatureManagerController],
  providers: [FeatureManagerService],
  exports: [FeatureManagerService],
})
export class FeatureManagerModule {}

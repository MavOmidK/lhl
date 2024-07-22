import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureTeamModule } from '@lhl/server/feature-team';
import { FeaturePlayerModule } from '@lhl/server/feature-player';
import { FeatureManagerModule } from '@lhl/server/feature-manager';

@Module({
  imports: [FeatureTeamModule, FeaturePlayerModule, FeatureManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

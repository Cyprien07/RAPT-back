import { Module } from '@nestjs/common';
import { GaresModule } from './gares/gares.module';

@Module({
  imports: [GaresModule],
})
export class AppModule {}

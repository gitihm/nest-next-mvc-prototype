import { Module } from '@nestjs/common';
import { TestModule } from './modules/test/test.module';

import { ViewModule } from './modules/view/view.module';

@Module({
  imports: [TestModule, ViewModule],
  controllers: [],
  providers: [],
})
export class ServerModule {}

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {
  constructor() {
    console.log("App Module")
  }
}
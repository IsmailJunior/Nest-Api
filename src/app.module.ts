import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampgroundModule } from './campground/campground.module';

@Module({
  imports: [
    CampgroundModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

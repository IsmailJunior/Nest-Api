import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampgroundSchema } from './schema/campground.schema';
import { CampgroundController } from './campground.controller';
import { CampgroundService } from './campground.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Campground', schema: CampgroundSchema },
    ]),
  ],
  controllers: [CampgroundController],
  providers: [CampgroundService],
})
export class CampgroundModule {}

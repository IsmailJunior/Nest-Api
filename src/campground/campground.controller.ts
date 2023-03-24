import {
  Controller,
  Get,
  Body,
  Post,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { CampgroundService } from './campground.service';
import { Campground } from './interface/campground.interface';

@Controller('campground')
export class CampgroundController {
  constructor(private readonly campgrounds: CampgroundService) {}
  @Get()
  async findAll(): Promise<Campground[]> {
    return this.campgrounds.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Campground> {
    return this.campgrounds.findOne(id);
  }

  @Post()
  async create(@Body() campground: Campground): Promise<Campground> {
    return this.campgrounds.create(campground);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<Campground> {
    return this.campgrounds.deleteOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() campground: Campground,
  ): Promise<Campground> {
    return this.campgrounds.update(id, campground);
  }
}

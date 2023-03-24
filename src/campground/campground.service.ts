import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Campground } from './interface/campground.interface';

@Injectable()
export class CampgroundService {
  constructor(
    @InjectModel('Campground')
    private readonly campgroundModel: Model<Campground>,
  ) {}

  async findAll(): Promise<Campground[]> {
    return await this.campgroundModel.find();
  }
  async findOne(id: string): Promise<Campground> {
    return await this.campgroundModel.findById(id);
  }

  async create(campground: Campground): Promise<Campground> {
    const newCampground = new this.campgroundModel(campground);
    return await newCampground.save();
  }

  async update(id: string, campground: Campground): Promise<Campground> {
    return await this.campgroundModel.findByIdAndUpdate(id, campground);
  }

  async deleteOne(id: string): Promise<Campground> {
    return await this.campgroundModel.findByIdAndRemove(id);
  }
}

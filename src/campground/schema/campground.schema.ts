import * as mongoose from 'mongoose';

export const CampgroundSchema = new mongoose.Schema({
  title: String,
  score: Number,
});

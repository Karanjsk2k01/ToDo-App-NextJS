import mongoose, { Schema } from "mongoose";


const completedSchema = new Schema(
  {
    title: 'String',
    description: 'String',
    date:'String'
  },
  {
    timestamps: true,
  }
  
);

const Complete = mongoose.models.Complete || mongoose.model('Complete', completedSchema)

export default Complete;
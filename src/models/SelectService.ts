import mongoose ,{ Document , Schema } from "mongoose"


export interface SelectService extends Document {
    gender : string,
    location : string,
    service : string,
    requirements : string
}

const ServiceModel: Schema<SelectService> = new mongoose.Schema({
  gender: {
    required: true,
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  requirements : {
    type : String,
    required : true
  }
});

const Service = (mongoose.models.Service as mongoose.Model<SelectService>) || (mongoose.model<SelectService>("Service" , ServiceModel));

export default Service;
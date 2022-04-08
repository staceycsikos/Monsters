import mongoose from "mongoose";
// import { object } from "webidl-conversions";

const Schema = mongoose.Schema;

// let weaknessSchema = new Schema({
//   element: {type: String}
// })

let Monster = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String },
  species: { type: String },
});

export default mongoose.model("monsters", Monster);

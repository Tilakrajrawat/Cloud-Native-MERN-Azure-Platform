import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  title: { type: String, required: true },
  content: { type: String, default: "" },
  metadata: { type: Object, default: {} }
}, { timestamps: true });

export default mongoose.model("Record", recordSchema);

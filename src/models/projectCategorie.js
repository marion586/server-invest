import mongoose from "mongoose";

const { Schema } = mongoose;

const categorieSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("Categorie", categorieSchema);

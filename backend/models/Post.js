const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Text,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

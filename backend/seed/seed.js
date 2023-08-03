const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Post = require("../models/Post");

dotenv.config();

const posts = [
  {
    title: "My first post",
    content: "This is my first post",
    image: "https://images.unsplash.com/photo-1612833603929-5e8b9f0b9b0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGFwcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    tags: ["first", "post"]
  }
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Successfully connected to the database.");
    await Post.deleteMany({});
    await Post.insertMany(posts);
    console.log("Successfully seeded the database.", posts);
    process.exit();
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  }
);

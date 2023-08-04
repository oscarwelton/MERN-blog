import axios from "axios";
import TextEditor from "./RichText";

const NewPost = (props) => {

  const createPost = () => {
    const title = document.getElementById("title").value;
    const content = document.querySelector(".tox-edit-area__iframe").contentWindow.document.querySelector("body").innerHTML;
    const image = document.getElementById("image").value;
    const tags = document.getElementById("tags").value.split(",");
    const post = {
      title,
      content,
      image,
      tags,
    };
    axios
      .post("http://localhost:3001/posts", post)
      .then((res) => {
        console.log(res);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="post-form">

      <h2>Create Post</h2>
      <form onSubmit={() => createPost()}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">Content</label>
        <TextEditor />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="tags">Tags</label>
        <input type="text" name="tags" id="tags" />
        <button type="submit">Create Post</button>
      </form>


    </div>
  );
};

export default NewPost;

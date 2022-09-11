import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
          date: new Date().toISOString(),
          userId,
        })
      );
    }
    setTitle("");
    setContent("");
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  // console.log(title);
  // console.log(userId)
  // console.log(Boolean(userId));
  return (
    <section>
      <h2 className="text-center">Add A New Post</h2>
      <form className="m-auto d-flex flex-column justify-content-center align-items-center addForm">
        <div className=" mt-2">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2 ">
          <label htmlFor="postAuthor">Author:</label>
          <select
            id="postAuthor"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
             <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        </div>
       <div className="d-flex justify-content-center align-items-center mt-2 py-3">
            <button type="submit" onClick={handleSubmit} disabled={!canSave} className="bg-primary fw-bold text-light py-1 px-3 rounded-3">
          Save Post
        </button>
       </div>
      </form>
    </section>
  );
};

export default AddPost;

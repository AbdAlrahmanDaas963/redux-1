import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

import React from "react";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((users) => users.id === userId);
  return <span>by {author ? author.name : "UnKnown author"}</span>;
};

export default PostAuthor;

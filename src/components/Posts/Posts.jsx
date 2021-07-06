import React from "react";
import { useHistory } from "react-router-dom";

export const Posts = ({ post }) => {
  const { userId, id, title, name } = post;
  let history = useHistory();

  const handleSubmit = (id, type, event) => {
    event.stopPropagation();
    history.push({
      pathname: `${type}/${id}`,
      search: `${id}`,
      state: post,
    });
  };

  return (
    <div
      className="card card-post  p-3 mb-3 bg-white rounded"
      onClick={(e) => handleSubmit(id, "post", e)}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <div
        className="card-footer text-right"
        onClick={(e) => handleSubmit(userId, "user", e)}
      >
        <footer className="blockquote-footer">
          <small className="text-muted"> By </small>
          <cite title="Source Title">
            <span style={{ fontWeight: "bolder" }}>{name}</span>
          </cite>
        </footer>
      </div>
    </div>
  );
};

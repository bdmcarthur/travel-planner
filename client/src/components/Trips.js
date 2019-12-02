import React from "react";

export default ({ trip: { title, description, _id }, onDelete }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => onDelete(_id)}
      >
        Remove
      </button>
    </div>
  );
};

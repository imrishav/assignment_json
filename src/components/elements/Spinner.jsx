import React from "react";

const Spinner = ({ spinning }) => {
  return spinning ? (
    <div className="spinner-border text-primary center_spinner" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    ""
  );
};

export default Spinner;

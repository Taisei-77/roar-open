import React from "react";

const Spinner = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center spinner-border text-light spinner-border-sm"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default Spinner;

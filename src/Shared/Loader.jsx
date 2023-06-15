import React from "react";

const Loader = ({ className }) => {
  className = "loading loading-dots loading-lg " + className;
  return (
    <div>
      <span className={className}></span>
    </div>
  );
};

export default Loader;

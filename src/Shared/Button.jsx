import React from "react";

const Button = (props) => {
  const className = "btn btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg" + props.className;
  const name = props.buttonname;
  return (
    <div>
      <button className={className} {...props}>
        {name}
      </button>
    </div>
  );
};

export default Button;

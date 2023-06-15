const Input = (props) => {
  const className="input" + props.className; //for bordered input write this instead of className="input" 
  return (
    <div>
      <div>
        {props.label && (
          <label className="label">
            <span className="label-text">{props.label}</span>
          </label>
        )}
        <input {...props} className={className} />
      </div>
    </div>
  );
};

export default Input;

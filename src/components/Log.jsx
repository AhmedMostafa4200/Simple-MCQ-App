import React from "react";
import { useForm } from "react-hook-form";

const Log = (props) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    props.history.push("/questions");
  };

  return (
    <React.Fragment>
      <form className="form-inline" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group mb-2">
          <span>Enter your name</span>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputName" className="sr-only">
            Name
          </label>
          <input
            ref={register({ required: true })}
            name="userName"
            type="text"
            required
            className="form-control"
            id="inputName"
            placeholder="Name"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Start exam
        </button>
      </form>
    </React.Fragment>
  );
};

export default Log;

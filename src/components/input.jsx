import React from "react";

const InputNumber = props => {
  return (
    <React.Fragment>
      <form
        className="container"
        style={{ width: "30rem" }}
        onSubmit={props.getNumber}
      >
        <div className="form-group">
          <label>Input</label>
          <div className="d-flex flex-row bd-highlight mb-3">
            <input
              type="number"
              className="form-control mr-2"
              id="inputnumber"
              required
            />
            <button type="submit" className="btn btn-primary">
              {props.loading ? (
                <div className="d-flex align-items-center">
                  <span
                    class="spinner-border spinner-border-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </div>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default InputNumber;

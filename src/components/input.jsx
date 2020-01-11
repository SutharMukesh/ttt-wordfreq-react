/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

const InputNumber = (props) => (
    <>
        <form
            className="container"
            onSubmit={props.getNumber}
        >
            <div className="form-group">
                <label htmlFor="inputnumber">Input</label>
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
                                    className="spinner-border spinner-border-sm mr-2"
                                    role="status"
                                    aria-hidden="true"
                                />
                                    Loading...
                            </div>
                        ) : (
                            'Send'
                        )}
                    </button>
                </div>
            </div>
        </form>
    </>
);

export default InputNumber;

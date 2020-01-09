import React from "react";

const InputNumber = (props) => {
    return (
        <React.Fragment>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            </form>
        </React.Fragment>
    );
}

export default InputNumber;
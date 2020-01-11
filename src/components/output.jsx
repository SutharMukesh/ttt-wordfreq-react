/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

const OutputTable = (props) => {
    if (props.data) {
        return (
            <div
                className="container"
            >
                <table className="table table-bordered table-sm table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Word</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((wc) => (
                            <tr>
                                <th scope="row">{wc.word}</th>
                                <td>{wc.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    return <></>;
};

export default OutputTable;

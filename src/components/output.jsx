import React from "react";

const OutputTable = props => {
    if(props.data){
        return (
          <div className="container" style={{ width: "30rem" }}>
            <table class="table table-hover ">
              <thead>
                <tr>
                  <th scope="col">Word</th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody>
                  {props.data.map((wc)=>{
                      return (
                        <tr>
                          <th scope="row">{wc.word}</th>
                          <td>{wc.count}</td>
                        </tr>
                      );
                  })}
              </tbody>
            </table>
          </div>
        );
    }else{
        return(
            <React.Fragment/>
        )
    }
};

export default OutputTable;

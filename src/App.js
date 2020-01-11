import React, { Component } from 'react';
import InputNumber from "./components/input"
import OutputTable from "./components/output"
import axios from 'axios';

class App extends Component {
    state = {
        loading:false,
        data:null,
        error:null,
    }
    getNumber=(event)=>{
        event.preventDefault();
        let topn = event.target.inputnumber.value;
        this.getTopNWords(topn)
    }

    getTopNWords=async(topn)=>{
        try {
            if(topn){
                this.setState({loading:true})
                let response = await axios.post("http://localhost:3005/wordfreq/"+topn)
                this.setState({data:response.data.data,loading:false,error:null})

            }
        } catch (error) {
            this.setState({error:error.toString(),loading:false})
        }
    }

    render() {
        return (
            <div className="container d-flex flex-column p-4 mt-5">
                <InputNumber getNumber={this.getNumber} loading={this.state.loading}/>
                <OutputTable data={this.state.data}/>
                {(this.state.error)?(
                    <div class=" container alert alert-danger" style={{ width: "28rem" }}>
                        <h5 class="alert-heading">Error!</h5>
                        <p>{this.state.error}</p>
                    </div>
                ):<React.Fragment/>}
            </div>
        );
    }
}

export default App;

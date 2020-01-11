/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';
import InputNumber from './components/input';
import OutputTable from './components/output';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            data: null,
            error: null,
        };
    }

    /**
     * Get Number from form data on submit event
     * sends request to backend with the topn number
     * sets the response data to state
     * @param event - form event
     */
    getNumber = async (event) => {
        try {
            event.preventDefault();
            const topn = event.target.inputnumber.value;
            if (topn) {
                this.setState({ loading: true });
                const response = await axios.post(`https://ttt-wordfreq-api.herokuapp.com/wordfreq/${topn}`);
                this.setState({ data: response.data.data, loading: false, error: null });
            }
        } catch (error) {
            this.setState({ error: error.toString(), loading: false });
        }
    }

    render() {
        return (
            <div className="card container shadow-sm d-flex flex-column p-4 mt-5" style={{width:"30rem"}}>
                <InputNumber getNumber={this.getNumber} loading={this.state.loading} />
                <OutputTable data={this.state.data} />
                {(this.state.error) ? (
                    <div className=" container alert alert-danger" style={{ width: '28rem' }}>
                        <h5 className="alert-heading">Error!</h5>
                        <p>{this.state.error}</p>
                    </div>
                ) : <></>}
            </div>
        );
    }
}

export default App;

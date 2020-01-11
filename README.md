# React WordFreq

Display's the top N words and their frequency of occurrence  

> **Note:**  
> Please be patient, the website can take time to load  
> As the traffic is low it may go to **dyno sleep**  

## Process

- An Input field which accepts a number  
    <img src="./Screenshots/input.png" alt="Input" width="500"/>
- When no value is passed in input field  
    <img src="./Screenshots/input_when_no_val.png" alt="input_when_no_val" width="500"/>  
- On Send button pressed, a request is made to [backend](https://github.com/SutharMukesh/ttt-wordfreq-api)  
    <img src="./Screenshots/input_req_send.png" alt="input_req_send" width="500"/>  
- If any Error occured on backend  
    <img src="./Screenshots/when_backend_error.png" alt="when_backend_error" width="500"/>  
- Backend returns a list of top n words and their respective count which are displayed in a tabular format  
    <img src="./Screenshots/output_table.png" alt="output_table" width="500"/>

## Components

1. **input**
   - Takes input value
   - **Send button** which sends request to backend.
2. **output**
   - Display response data in **table**

import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: [
            {
                username: "Adrian",
                message: "Chiripping",
                comment: "Insert Comment Here!"
            },
            {
                username: "Josh",
                message: "Chiripping",
                comment: "Insert Comment Here!"
            },
            {
                username: "Cris",
                message: "Chiripping",
                comment: "Insert Comment Here!"
            }    
            ]
        }
    }
    render() {
        return (
            this.state.chirps.map((chirps) =>{
                return(
                    <React.Fragment>
                      <div style={{border: '5px solid lightblue'}} class="card w-20">
                        <h1>{chirps.username}</h1>
                        <p>{chirps.message}</p>
                        <h3>{chirps.comment}</h3>
                        <button class="btn btn-success btn-md">Click me !</button>
                        </div>
                    </React.Fragment>
                )
            })
        ) 
    };
};
         
        
    




export default App;
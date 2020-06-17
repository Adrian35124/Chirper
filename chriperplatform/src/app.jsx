import React, { Component } from 'react'
import Nav from './navbar'
import Post from "./post"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            message: "",
            chirps: [
            {
                username: "Adrian",
                message: "Chiripping",
            },
            {
                username: "Josh",
                message: "Chiripping",
                
            },
            {
                username: "Cris",
                message: "Chiripping",
                
            }    
            ]
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.submitNewChirp = this.submitNewChirp.bind(this)
    }
    handleNameChange(e) {
        this.setState({username: e.target.value})
    }
    handleMessageChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    submitNewChirp() {
        let newChirp = {
            username: this.state.username,
            message: this.state.message
        }
        this.setState({
            chirps:[...this.state.chirps, newChirp]
        })
        console.log(this.state.chirps)
    }
    render() {
        let chirps = (this.state.chirps.map((chirps) =>{

            return(
                <React.Fragment>
                  <div style={{border: '5px solid green'}} class="card w-20">
                    <h1>{chirps.username}</h1>
                    <p>{chirps.message}</p>
                    <h3>{chirps.comment}</h3>
                    <button class="btn btn-success btn-md" >Click me !</button>
                    </div>
                </React.Fragment>
                
            )
        }))
        return (
            <React.Fragment>
            <Nav />
            {chirps}
            <Post submitNewChirp={this.submitNewChirp} handleNameChange={this.handleNameChange} handleMessageChange={this.handleMessageChange}/>
        </React.Fragment>) 
    };
};
         
        
    




export default App;
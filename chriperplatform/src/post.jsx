import React from 'react'

export default function Post(props) {
    return (
        <div>
            <input type="text" placeholder="Name" onChange={props.handleNameChange}/>
            <input type="text" placeholder="Message" onChange={props.handleMessageChange}/>
            <input type="button" onClick={props.submitNewChirp} value="Submit" />
        </div>
    )
}

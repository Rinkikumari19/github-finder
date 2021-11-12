import React, { Component } from 'react'

export default class Class_comp extends Component {
    constructor(props){
        super(props)
            this.state={value:""}
            // const change = this.bind
    }

    // change_data (){
    //     setState(){
    //         value:this.state.value
    //     }
    // }
    render() {
        return (
            <div>
                <input type="type" value={this.state.value} onChange={(e)=>e.target.value} placeholder='Write something....'/>
                <button onClick={this.change_data}>Click me</button>
                <h1>Hellooooooo</h1>
            </div>
        )
    }
}


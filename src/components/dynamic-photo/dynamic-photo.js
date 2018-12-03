import React, { Component } from "react"


export default class DynamicPhoto extends Component {
    constructor(props) {
        super(props)

        this.state = { selected: 0 }
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }


        prev(){
          this.setState((prevState,props)=>({
              selected: prevState.selected  ==  0 ? props.pictures.length - 1 :  prevState.selected -1
          }))
        }

        next(){
            this.setState((prevState,props)=>({
                selected: prevState.selected == props.pictures.length -1 ? 0 : prevState.selected + 1
            }))
          }
    render() {
        return (
            <div>

                <img height="100" width="200" src={this.props.pictures[this.state.selected]} />
                <br></br>
                <button onClick={this.prev} className="btn btn-primary"> prev </button>  <button onClick={this.next} className="btn btn-primary"> next </button>
            </div>
        )
    }
}
import React, { Component } from "react";
import DynamicPhoto from "../dynamic-photo/dynamic-photo";
import "./place.css"

export default class Place extends Component {
    constructor(props) {
        super(props)

        this.state = { btnClass: "danger", input: "default" }


        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            input: e.target.value
        })
    }





    render() {
        console.log("render? ")
        return (
            <div className="card col-lg-6">

                <h2>{this.props.name} <button className={`btn btn-${this.state.btnClass}`} onClick={
                    () => {
                        this.props.handleClick(this.props.data, this.props.operation)
                    }
                }>{this.props.operation}</button>  </h2>
                <h2>{this.props.price}</h2>
                <DynamicPhoto pictures={this.props.pictures} />
                {this.props.btn1 && <button>1</button>}
                {this.props.btn2 && <button>2</button>}

                <button onClick={() => {
                    this.setState({
                        btnClass: "danger"
                    })
                }}>danger</button>
                <button onClick={() => {
                    this.setState({
                        btnClass: "primary"
                    })
                }}>primary</button>

                <input value={this.state.btnClass} onChange={(e) => {
                    this.setState({
                        btnClass: e.target.value
                    })
                }} />

                <input value={this.state.input} onChange={this.handleInputChange} />



            </div>
        )
    }
}
{/* <button onClick={
    () => {
        this.props.handleClick(this.props.data, "edit")
    }
}>Edit</button> */}
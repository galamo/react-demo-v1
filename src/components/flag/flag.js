import React, { Component } from "react";



export default class Flag extends Component {
    constructor(props) {
        super(props)


    }






    render() {

        return (
            <div className="card col-lg-6">


                <span>Country Name </span>  <span>{this.props.data.name} </span>
                <br />
                <span>Population </span>  <span>{this.props.data.population} </span>




            </div>
        )
    }
}

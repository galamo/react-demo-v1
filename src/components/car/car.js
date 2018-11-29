import React, { Component } from "react"


export const Car = (props) => {

    let card = <div className="card col-lg-3" >
        <h1> {props.name} </h1>
        <h2> {props.origin} </h2>
        <h2> {props.horsepower} </h2>
        <button> Buy </button>
    </div >
    let li = <li>{props.data.Name}  + {props.necrumancer}</li>




    return props.config == "card" ? card : li;

}
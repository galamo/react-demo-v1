import React, { Component } from "react"


// export const Car = (props) => {

//     let card = <div className="card col-lg-3" >
//         <h1> {props.name} </h1>
//         <h2> {props.origin} </h2>
//         <h2> {props.horsepower} </h2>
//         <button> Buy </button>
//     </div >
//     let li = <li>{props.data.Name}  + {props.necrumancer}</li>




//     return props.config == "card" ? card : li;

// }

export default class Car extends Component {
    constructor(props) {
        super(props)

        this.state = { favorite: "", buy: false }
    }

    iLikeIt() {
        this.setState({
            favorite: "i like it!"
        })
    }

    buy() {
        this.setState((prevState) => ({
            buy: !prevState.buy
        }))

    }


    render() {
        return (
            <div className="card col-lg-3" >
                <h1> {this.props.name} </h1>
                <h2> {this.props.origin} </h2>
                <h2> {this.props.horsepower} </h2>
                <span> {this.state.favorite} </span>
                {this.state.buy && <span> i want to by this car </span>}
                <button onClick={this.iLikeIt.bind(this)}> Favorite </button>
                <button onClick={this.buy.bind(this)}> toggle buy </button>
            </div >
        )
    }
}
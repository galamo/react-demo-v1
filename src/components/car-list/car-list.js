import React, { Component } from "react";
import { cars } from "../../config/data"
import { Car } from "../car/car";
import { uiKeyGen } from "../../config/uiKeygenerator";

export default class CarList extends Component {

    constructor(props) {
        super(props)

        this.state = { config: "card" }

        // this.changeConfigCard = this.changeConfigCard.bind(this) //bind this context to changeConfig function
        // this.changeConfigLi = this.changeConfigLi.bind(this) //bind this context to changeConfig function
        this.changeConfig = this.changeConfig.bind(this);
    }

    changeConfig(e) {
        this.setState({
            config: e.target.innerText.toLowerCase()
        })
    }

    // changeConfigCard() {
    //     this.setState({
    //         config: "card"
    //     })
    // }

    // changeConfigLi() {
    //     this.setState({
    //         config: "li"
    //     })
    // }


    render() {

        return (
            <div>
                <h1> car list</h1>
                <button onClick={this.changeConfig} className="btn btn-primary"> Card  </button>
                <button onClick={this.changeConfig} className="btn btn-primary" > LI  </button>
                <div className="row">
                    {cars.map((car) => {
                        return <Car key={uiKeyGen()} data={car} necrumancer={car.Acceleration} config={this.state.config} name={car.Name} origin={car.Origin} horsepower={car.Horsepower} />
                    })}
                </div>
            </div>
        )
    }
}










 //this is an option - bad one
    // renderCars() {
    //     let carsLi = [];
    //     cars.forEach((car) => {
    //         carsLi.push(<li> {car.Name} </li>)
    //     })
    //     return carsLi;
    // }

    //this is another option
    // renderCars() {
    //     let cars = cars.map((car) => {
    //         return <li> {car.Name} </li>
    //     })
    //     return cars;
    // }
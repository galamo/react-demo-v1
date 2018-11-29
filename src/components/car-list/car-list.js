import React, { Component } from "react";
import { cars } from "../../config/data"

let a = () => {
    return <h2>some function </h2>
}
export default class CarList extends Component {

    constructor(props) {
        super(props)
        console.log(cars)
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

    render() {
        return (
            <div>

                <h1> car list</h1>

                {cars.map((car) => {
                    return <div>
                        <h1>
                            {car.Name}
                        </h1>
                        <h2>
                            {car.Origin}
                        </h2>
                        <h2>
                            {car.Horsepower}
                        </h2>
                        <h2>
                            {car.Cylinders}
                        </h2>
                        <button> buy me! </button>
                        <input type="checkbox" value={true} />
                    </div>
                })}

            </div>
        )
    }
}
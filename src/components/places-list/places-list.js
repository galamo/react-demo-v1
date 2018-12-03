import React, { Component } from "react"
import { places } from "../../data/placesData";
import Place from "../place/place";
export default class PlacesList extends Component {
    constructor(props) {
        super(props)
        console.log(places)
    }


    render() {
        return (
            <div>
                <h1> Places List </h1>
                <div className="row">
                    {places.map((place, index) => {
                        return <Place operation={"add"} data={place} handleClick={this.props.handleClick} pictures={place.pictures} name={place.place} price={place.price} key={`${place.place}${index}`} />
                    })}

                </div>
            </div>
        )
    }
}
import React, { Component } from "react"
import { places } from "../../data/placesData";
import Place from "../place/place";
export default class FavoriteList extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <h1> Favorite List </h1>
                <div className="row">
                    {this.props.favorites.map((favoritePlace, index) => {
                        return <Place btn1={false} btn2={true} operation={"remove"} data={favoritePlace} handleClick={this.props.handleClick} pictures={favoritePlace.pictures} name={favoritePlace.place} price={favoritePlace.price} key={`${favoritePlace.place}${index}`} />
                    })}

                </div>
            </div>
        )
    }
}
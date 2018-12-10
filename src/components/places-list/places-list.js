import React, { Component } from "react"
import Flag from "../flag/flag";
import CircularProgress from '@material-ui/core/CircularProgress';
export default class PlacesList extends Component {
    constructor(props) {
        super(props)

        this.state = { countries: null }
    }


    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all").then((success) => {
            return success.json()
        }).then((data) => {

            this.setState({
                countries: data
            })
        })
    }

    render() {
        console.log("render list component", this.state.countries)
        return (
            <div>
                <h1> Places List </h1>
                {this.state.countries && <div className="row">
                    {/* {places.map((place, index) => {
                        return <Place operation={"add"} data={place} handleClick={this.props.handleClick} pictures={place.pictures} name={place.place} price={place.price} key={`${place.place}${index}`} />
                    })} */}

                    {this.state.countries.map((flag, index) => {
                        return <Flag data={flag} key={`${flag.name}_${index}`} />
                    })}


                </div>}
                {!this.state.countries && <CircularProgress />}
            </div>
        )
    }
}
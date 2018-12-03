import React, { Component } from 'react';
import './App.css';
import jquery from "jquery";
import "bootstrap/dist/css/bootstrap.css";

import PlacesList from "./components/places-list/places-list";
import FavoriteList from './components/favorites/favorites';
import Search from "./components/search/search";




class App extends Component {
  constructor(props) {
    super(props)

    this.state = { favorites: [] }
    this.addOrRemove = this.addOrRemove.bind(this)
  }


  addOrRemove(selectedPlace, operation) {
    console.log(operation);
    if (operation == "add") {
      this.setState((prevState) => ({
        favorites: [...prevState.favorites, selectedPlace]
      }))
    } else if (operation == "remove") {
      this.setState((prevState) => ({
        favorites: prevState.favorites.filter((place) => {
          return place.place != selectedPlace.place
        })
      }))



    }
  }


  render() {

    return (
      <div className="App">
        <div className="container">
          <div>
            <Search dispachText={(text) => {
              alert(text)
            }} />
          </div>
          <div>
            <PlacesList handleClick={this.addOrRemove} />
          </div>
          <div>
            <FavoriteList handleClick={this.addOrRemove} favorites={this.state.favorites} />
          </div>


        </div>


      </div>
    );
  }
}

export default App;



// else if (operation == "edit") {
//   let favorites = [...this.state.favorites];
//   favorites = favorites.filter((place) => {
//     return place.place != selectedPlace.place
//   });
//   selectedPlace.place = "000000";
//   this.setState({
//     favorites
//   })
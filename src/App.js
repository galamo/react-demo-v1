import React, { Component } from 'react';
import './App.css';
import jquery from "jquery";
import "bootstrap/dist/css/bootstrap.css";


import CarList from "./components/car-list/car-list"


// function CarList(props) {

//   return <div>
//     <h1 style={{ color: props.mainColor }}>  {props.listHeader}</h1>
//     <ul>
//       <li>car 1</li>
//       <li>car 2</li>
//       <li>car 3</li>
//     </ul>
//   </div>
// }


class App extends Component {
  render() {
    let header = <h1> Testing application </h1>
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <CarList />
          </div>

       
        </div>

        {/* <CarList listHeader="car list" mainColor="red" /> */}


      </div>
    );
  }
}

export default App;

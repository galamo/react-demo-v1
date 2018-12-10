import React, { Component } from "react"
import { places } from "../../data/placesData";
import Place from "../place/place";
import Button from '@material-ui/core/Button';

import Modal from '@material-ui/core/Modal';

export default class FavoriteList extends Component {
    constructor(props) {
        super(props)
        console.log("FavoriteList constructor")
        this.state = { render: true, open: false }
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps)
    }
    shouldComponentUpdate() {
        return true;
    }

    shouldComponentUpdate() {
        return this.state.render
    }



    render() {
        console.log("render")
        return (
            <div>
                <h1> Favorite List </h1>

                <div className="row">
                    {this.props.favorites.map((favoritePlace, index) => {
                        return <Place btn1={false} btn2={true} operation={"remove"} data={favoritePlace} handleClick={this.props.handleClick} pictures={favoritePlace.pictures} name={favoritePlace.place} price={favoritePlace.price} key={`${favoritePlace.place}${index}`} />
                    })}

                </div>
                <Button onClick={() => {
                    this.setState({
                        render: false
                    })
                }}>cancel render</Button>
                <Button onClick={() => {
                    this.setState({
                        open: true
                    })
                }}>Open Modal</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={() => {
                        this.setState({
                            open: false
                        })
                    }}
                >
                    <div style={{ padding: "20px", background: "black", position: "fixed", top: "50%", left: "30%", width: "200px", height: "200px", border: "red solid 2px" }}>
                        <h5> Component updated! </h5>
                        <button onClick={() => {
                            this.setState({
                                open: false
                            })
                        }}> close </button>
                    </div>


                </Modal>
            </div >
        )
    }
}
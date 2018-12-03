import React, { Component } from "react"

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = { search: "" }
    }


    render() {
        return (
            <div>
                <h1> Search </h1>
                <input value={this.state.search} onChange={
                    (e) => {
                        this.setState({
                            search: e.target.value
                        })
                    }
                } />
                <button className="btn btn-warning" onClick={() => {
                    this.props.dispachText(this.state.search)
                }}> Click to Search </button>

            </div>

        )
    }
}
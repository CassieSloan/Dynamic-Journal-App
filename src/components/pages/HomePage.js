import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return(
            <>
                <h1>Home</h1>
                <Link to="./category">
                    <button>Select a Category</button>
                </Link>
            </>
        )
    }
}

export default HomePage;
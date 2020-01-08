import React, { Component } from "react";

import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import NewEntryPage from "./pages/NewEntryPage";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {


    render() {
        return(
            <div>
                <BrowserRouter>
                    <>
                        <Route exact path = "/" component={HomePage} />
                        <Route exact path = "/category" component={CategorySelectionPage} />
                        <Route exact path = "/entry" component={NewEntryPage} />
                    </>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
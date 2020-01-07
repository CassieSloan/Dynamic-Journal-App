import React, { Component } from "react";

import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    render() {
        return(
            <>
                <HomePage/>
                <CategorySelectionPage/>
                <NewEntryPage/>
            </>
        )
    }
}

export default App;
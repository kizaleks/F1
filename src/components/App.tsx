import * as React from "react";

import "../styles/App.css";
import Main from "./Main";
import Header from "./Header";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />            
                <Main />
            </>
        );
    };
};

export default App;
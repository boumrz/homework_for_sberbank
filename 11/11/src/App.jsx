// Slomux - реализация Flux, в которой, как следует из нвазвания, что-то сломано.
// Нужно выяснить что здесь сломано
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// import Table from "./components/Table";
import FilterableProductTable from "./components/FilterableProductTable";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={FilterableProductTable}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App

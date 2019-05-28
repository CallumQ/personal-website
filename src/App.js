import React, { Component } from 'react';
import Home from "../src/components/Home/Home";
import Contact from "../src/components/Contact/Contact";
import Portfolio from "../src/components/Portfolio/Portfolio";
import CV from "../src/components/CV/CV";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/posts")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
           this.setState({items:json, itemCount: json.length})
        })
    }

    render()
    {
        return (
            <div className="app">
                <Router>
                    <Route
                        render= {({ location }) => (
                            <React.Fragment>
                                <Navbar/>
                                <div className="content">
                                    <Route exact path="/" render={() => <Redirect to="/home" />}/>
                                    <Route exact path="/home" component={Home}/>
                                    <Route exact path="/contact" component={Contact} /> 
                                     <PropsRoute exact path="/portfolio" component={Portfolio} items={this.state.items} />
                                    <Route exact path="/cv" component={CV} /> 
                                </div>
                                <Footer/>
                            </React.Fragment>
                        )}
                    />
                </Router>
            </div>
        )
    }
}

const PropsRoute = ({component, path, ...otherProps}) => (
  <Route {...otherProps} path={path} render={routeProps => 
      React.createElement(component, {...otherProps, ...routeProps})
    } />
)  
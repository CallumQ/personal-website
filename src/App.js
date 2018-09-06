import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import './App.css';
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import Portfolio from "../src/components/Portfolio/Portfolio";
import { TransitionGroup, CSSTransition } from 'react-transition-group';


export default class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Router>
          <Route
            render={({ location }) => (
            <React.Fragment>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/home" />}
                  />
                  <Navbar/>
                  <div className="content-section">
                    <TransitionGroup>
                      <CSSTransition key={location.key} classNames="fade" timeout={599}>
                        <Switch location={location}>
                          <Route exact path="/home" component={Home}/>
                          <Route exact path="/portfolio" component={Portfolio}/>
                          <Route exact path="/cv" component={CV}/>
                          <Route exact path="/contact" component={Contact}/>
                          <Route exact path="/blog" component={Blog}/>
                          <Route render={() => <div>Not Found</div>}/>  
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
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




const CV = () => {return(<div>CV</div>)}
const Contact = () => {return(<div>Contact</div>)}
const Blog = () => {return(<div>Blog</div>)}

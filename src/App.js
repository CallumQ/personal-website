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
import { TransitionGroup, CSSTransition } from 'react-transition-group'
class App extends Component {
    render() {
        return ( 
            <div className="App">
            
                <Router>
    <Route
      render={({ location }) => (
        <div>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />}
          />

          <Navbar/>

          <div >
            <TransitionGroup>
              {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
            */}
              <CSSTransition key={location.key} classNames="fade" timeout={250}>
                <Switch location={location}>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/projects" component={Project}/>
                  <Route exact path="/cv" component={CV}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/blog" component={Blog}/>
                  
                  
                  {/* Without this `Route`, we would get errors during
                    the initial transition from `/` to `/hsl/10/90/50`
                */}
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      )}
    />
  </Router>
            </div>
        )
    }
}

export default App;


const Home = () => {return(<div>Home</div>)}
const About = () => {return(<div>About</div>)}
const Project = () => {return(<div>Projects</div>)}
const CV = () => {return(<div>CV</div>)}
const Contact = () => {return(<div>Contact</div>)}
const Blog = () => {return(<div>Blog</div>)}
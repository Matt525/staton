import React from 'react';
import './App.css';
// import {Route, BrowswerRouter as Router, Link, Switch} from 'react-router-dom'; 
import Landing from './Landing'; 
import Projects from './Projects';
import Contact from './Contact';
import './main.css';

function App() {


  return (
    
    // <BrowserRouter>
    //   <React.Fragment>
    //     <Route path="/" component={Home} />
    //     <Route path="/about" component={Contact} />
    //     <Route path="/user" component={} />
    //   </React.Fragment>
    // </BrowserRouter>

      <React.Fragment>
          <Landing />
          <Projects />
          <Contact />
      </React.Fragment>
      
    
    
 
  );
}

export default App;

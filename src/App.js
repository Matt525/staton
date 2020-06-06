import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './Landing'; 
import Projects from './Projects';
import Contact from './Contact';
import './main.css';

function App() {


  return (

    
    

            <Router>

                    <Route exact path='/'>
                        <Landing />               
                        <Projects />
                        <Contact />
                    </Route>

  
                   <Route path="/faq" component={()=>{window.location = "https://www.google.com"}} />

            

  {/*   

                    <Route path="/projects/rgb_app">
                      <RgbApp />
                    </Route>

                    <Route path="/projects/ecommerce_app">
                      <EcommerceApp />
                    </Route>

                    <Route path="/projects/patatap_app">
                      <PatatapApp />
                    </Route> */}

                    

            </Router>
      
    
 
  );
}

export default App;

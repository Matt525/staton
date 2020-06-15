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

                                            {/* P r o j e c t  -  R o u t e s */}
  
                            <Route path="/projects/patatap" component={()=>{window.location = "https://suspicious-heyrovsky-63d4b0.netlify.app/"}} />

                            <Route path="/projects/rgb_app" component={()=>{window.location = "https://matt525.github.io/RGBColorGame/" }} />

                            <Route path="/projects/breakout" component={()=>{window.location = "https://pensive-mccarthy-649681.netlify.app" }} />

                            <Route path="/projects/weather_application" component={()=>{window.location = "https://musing-morse-5eaa60.netlify.app" }} />
                            
                            <Route path="/projects/ecommerce" component={()=>{window.location = "https://pensive-mccarthy-649681.netlify.app" }} />
                            

            </Router>
      
    
 
  );
}

export default App;

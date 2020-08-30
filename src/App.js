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
  
                           
                                            <Route path="/projects/patatap" component={()=>{window.location.href = "https://suspicious-heyrovsky-63d4b0.netlify.app/"; return null;}} />

                                            <Route path="/projects/rgb_app" component={()=>{window.location.href = "https://matt525.github.io/RGBColorGame/"; return null;}} />

                                            <Route path="/projects/breakout" component={()=>{window.location.href = "https://pensive-mccarthy-649681.netlify.app"; return null; }} />

                                            <Route path="/projects/weather_application" component={()=>{window.location.href = "https://musing-morse-5eaa60.netlify.app"; return null; }} />

                                            <Route path="/projects/ecommerce" component={()=>{window.location.href = "https://friendly-jackson-9dc8dc.netlify.app/"; return null; }} />

                                            <Route path="/projects/sign_up" component={()=>{window.location.href = "https://immense-brook-68010.herokuapp.com/"; return null; }} />
                                            
                                            <Route path="/projects/red_cloud" component={()=>{window.location.href = "https://hopeful-lalande-975773.netlify.app"; return null; }} />
                            

            </Router>
      
    
 
  );
}

export default App;

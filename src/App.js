import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './Landing'; 
import Projects from './Projects';
import Contact from './Contact';
import development from './development';
import './main.css';
import AboutMe from './AboutMe';
import References from './References';
import Letter from './Letter';
import Navigation from './Navigation';
import { Nav } from 'reactstrap';

function App() {
  return (

            <Router>

                    <Route exact path='/'>
                        <Navigation />
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
                                            
                                            <Route path="/projects/red_cloud" component={()=>{window.location.href = "https://kind-ride-de07b5.netlify.app"; return null; }} />
                                            
                                            <Route path="/projects/real_estate" component={()=>{window.location.href = "https://epic-bhaskara-e3ba76.netlify.app/"; return null; }} />
                                            
                                            <Route path="/projects_page" component={development} />

                                            <Route path="/development" component={development} />

                                            <Route path="/aboutme">
                                                  <Navigation />
                                                  <AboutMe/>
                                            </Route>

                                            <Route path="/references">
                                                <Navigation/>
                                                <References/>
                                            </Route>
                                            
                                            <Route path="/letter">
                                                <Navigation/>
                                                <Letter/>
                                            </Route>

            </Router>
      
    
 
  );
}

export default App;

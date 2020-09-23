    import React from 'react'; 
    import './main.css';
    import './carousel.scss';
    import './landingQueries.scss'
    




    class Landing extends React.Component{
        render(){
            
            return(
                <div id="wrapper">

                {/* <!-- Banner --> */}
                    <section id="banner" className="major" style={{backgroundPosition: 'center 0px', fontWeight: '200!important'}}>
                        
                                <div className="inner">
                                    <header className="major">
                        
                                        <h1 id="intro_header">Hey, My Name Is<span> Matt Staton</span> </h1>

                                    </header>

                                <div className="content">
                                        <h3 className="wordCarousel">    
                                    <span>A Front End Developer who is</span>

                                            <div className="flip-wrapper"> 
                                                <ul className="flip4"> 
                                                    <li style={{paddingTop: '15px'}}>passionate</li>
                                                    <li style={{paddingTop: '5px'}}>driven</li>
                                                    <li style={{paddingBottom: '2px'}}>creative</li> 
                                                    <li style={{paddingBottom: '5px'}}>enthuseastic</li>  
                                                </ul>
                                            </div>
                                        </h3>    
                                
                                </div>
                                        <br />
                        
                                        <ul className="actions">
                                                <li id="myProjects"><a href="/aboutme" className="button next scrolly">About Me</a></li>
                                        </ul>

                                </div>
                    </section>
            </div>
            )
        }
    }


    export default Landing;
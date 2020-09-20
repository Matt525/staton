    import React from 'react'; 
    import './main.css'; 
    import './carousel.scss';
    import $ from 'jquery'; 
    import Toggle from './Toggle';
    import FullscreenNav from './FullscreenNav';
    import './Navigation.scss'



    class Landing extends React.Component{

        constructor(props){
            super(props)
            let navbar = $('#header');
            let menu = document.getElementById('nav-menu');
            let windowPos = window.scrollY;
            let navbarTop = navbar.offSetTop; 
            let scrolled = windowPos> navbarTop;
            
            
            // state for fullscreen modal
            this.state = { 
                isFull: false,
            }
        }


        render(){
            
            return(
                <div id="wrapper">

                    {/* Nav Overlay */}


                        <Toggle render={({on, toggle})=> (
                            
                            <div>
                        
                                    {on && <FullscreenNav toggle={toggle} />}
                                    <div className="custom-container">        
                                                        <div className="logo">
                                                                Matthew
                           
                                                        </div>
                                                            <h1 id="brand-label" style={{float: 'left', margin: '10px 0 0 20px', textDecoration: 'none', fontWeight: '200'}}>Front-End Developer</h1>
                                                                                         
                                                                <ul className="navigationBar">
                                                                    <div onClick={toggle} style={{cursor: 'pointer'}}>
                                                                        <div className="line"></div>
                                                                        <div className="line"></div>
                                                                        <div className="line"></div>
                                                                    </div>
                                                                </ul>

                                    </div>
                            </div>
                        
                        )



                    }


                    
                    />
                
                                    


    
                            
                {/* <!-- Menu --> */}

                                

                {/* <!-- Banner --> */}
                    <section id="banner" className="major" style={{backgroundPosition: 'center 0px'}}>
                        <div className="inner">
                            <header className="major">
                
                                <h1>Hey, My Name Is<span> Matt Staton</span> </h1>

                            </header>


                




            <div className="content">
                <h3 className="wordCarousel">    
            <span>A Front End Developer who is</span>  
            <div> 
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
                                    <li id="myProjects"><a href="/development" className="button next scrolly">About Me</a></li>
                            </ul>

                        </div>
                    </section>
            </div>
            )
        }
    }


    export default Landing;
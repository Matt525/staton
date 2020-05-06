import React from 'react'; 
import './main.css'; 
import './carousel.scss';
import $ from 'jquery'; 
import Toggle from './Toggle';
import FullscreenNav from './FullscreenNav'; 


class Landing extends React.Component{

    constructor(props){
        super(props)
        let navbar = $('#header');
        let menu = document.getElementById('nav-menu');
        let windowPos = window.scrollY;
        let navbarTop = navbar.offSetTop; 
        let scrolled = windowPos> navbarTop;
        this.openNav = this.openNav.bind(this); 
        
        // state for fullscreen modal
        this.state = { 
            isFull: false,
        }


    }
     openNav = (e) =>{
         e.preventDefault(); 
        document.getElementById('menu').classList.toggle('visible'); 

    }

    render(){
        

        return(
            <div id="wrapper">

                {/* Nav Overlay */}


                    <Toggle render={({on, toggle})=> (
                        
                        <div>
                    
                                {on && <FullscreenNav toggle={toggle} />}

                                           {/* <!-- Header --> */}
                <header id="header" className="reveal alt fixed">
                        <a href="index.html" className="logo"><strong>Matthew</strong> <span>Front-End Developer</span></a>



                                {/* Right Nav Menu Button */}
                                <nav id="nav-menu">
                                    <a href="#menu" onClick={toggle}>Menu</a>
                                </nav>
                            </header>

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
        {/* <p className="wordCarousel" style={{paddingTop: '10px', color: '#fff', letterSpacing: '0.5em'}}>towards web development</p> */}
        <br />
        
                        <ul className="actions">
                                <li><a href="#one" className="button next scrolly">My Projects</a></li>
                        </ul>

                    </div>
                </section>
        </div>
        )
    }
}


export default Landing;
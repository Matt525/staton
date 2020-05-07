import React from 'react'; 
import './main.css'; 
import './carousel.scss';
import $ from 'jquery'; 


class Landing extends React.Component{
    constructor(props){
        super(props)
        console.log($('#header'));

        let navbar = $('#header');
        let menu = document.getElementById('nav-menu');
        let windowPos = window.scrollY;
        let navbarTop = navbar.offSetTop; 
        let scrolled = windowPos> navbarTop;

        if(scrolled){
            navbar.addClass('fixed');
        }
        else{ 
            navbar.removeClass('fixed');
        }

        this.openNav = this.openNav.bind(this); 

    }


     openNav = () =>{
        document.getElementById('menu').style.visibility = 'visible'; 
    }

     closeNav = () => { 
        document.getElementById('menu').style.visibility = 'hidden'; 

    }

  


    render(){
        

        return(
            <div id="wrapper">

            {/* <!-- Header --> */}
                <header id="header" className="reveal alt fixed">
                    <a href="index.html" className="logo"><strong>Matthew</strong> <span>Front-End Developer</span></a>
                     {/* Right Nav Menu */}
                    <nav onClick={this.openNav} id="nav-menu">
                        <a href="#menu">Menu</a>
                    </nav>
                </header>

            {/* <!-- Menu --> */}
                

            {/* <!-- Banner --> */}
                <section id="banner" className="major" style={{backgroundPosition: 'center 0px'}}>
                    <div className="inner">
                        <header className="major">
            
                            <h1>Hey, My Name Is<span> Matt Staton</span> </h1>

                        </header>

                    <nav id="menu">
						<ul class="links">
							<li><a href="index.html">Home</a></li>
							<li><a href="landing.html">Landing</a></li>
							<li><a href="generic.html">Generic</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
						<ul class="actions stacked">
							<li><a href="#" class="button primary fit">Get Started</a></li>
							<li><a href="#" class="button fit">Log In</a></li>
						</ul>
					</nav>


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
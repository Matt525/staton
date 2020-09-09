import React from 'react';
import './main.css';

export default class Projects extends React.Component{
    render(){



        return(
            <div id="main">
									{/* Weather Application  */}

							<section id="one" className="tiles">

	
								<article>
								<header className="major">
										<h3><a href="/projects/ecommerce" className="link">Ecommerce Website</a></h3>
										<p>An ecommerce shopping site built with ReactJS framework</p>
										<br />
										<a className="btn btn-dark btn-lg active m-2" href="/projects/ecommerce">Preview</a>
										<a className="btn btn-dark btn-lg active m-2" href="https://github.com/Matt525/ecommerce">Code</a>
								</header>
								</article>
																		{/* Real Estate Web Site */}
	
								<article>
									<header className="major">
										<h3><a href="/projects/real_estate" className="link">Real Estate Website</a></h3>
										<p>A real estate site using mapbox and Zillow API to pull data from user location.</p>
										<br />
										<a className="btn btn-dark btn-lg active m-2" href="/projects/real_estate">Preview</a>
										<a className="btn btn-dark btn-lg active m-2" href="https://github.com/Matt525/real-estate-site.git">Code</a>
									</header>
								</article>
								
								<article>
								<header className="major">
										<h3><a href="/projects/sign_up" className="link">SMTP Web App</a></h3>
										<p>Sign Up SMTP application built in ReactJS/NodeJS.</p>
										<br />
										<a className="btn btn-dark btn-lg active m-2" href="/projects/sign_up">Preview</a>
										<a className="btn btn-dark btn-lg active m-2" href="https://github.com/Matt525/login_signUp">Code</a>
									</header>
								</article>
						
								<article >
								<header className="major">
										<h3><a href="/projects/sign_up" className="link">Red Cloud Website</a></h3>
										<p>Personal Brand static website design.</p>
										<br />
										<a className="btn btn-dark btn-lg active m-2" href="/projects/red_cloud">Preview</a>
										<a className="btn btn-dark btn-lg active m-2" href="https://github.com/Matt525/redcloud.io">Code</a>
									</header>
								</article>
		
												{/* RGB Game Application  */}

								<article>
									<header className="major">
									<h3><a href="/projects/weather_application" className="link">Weather Application</a></h3>
									<p>Weather API Application pulling data by location.</p>
										<br />
										<a className="btn btn-dark btn-lg active m-2" href="/projects/weather_application">Preview</a>
										<a className="btn btn-dark btn-lg active m-2" href="https://github.com/Matt525/weather_application">Code</a>
									</header>
			
								</article>

										{/* Patatap Application  */}

								<article>
									<header className="major">
									<h3><a href="/projects/rgb_app" className="link">RGB Color Game</a></h3>
										<p>A RGB guessing game built with in JavaScript</p>										<br />
										<a className="btn btn-dark btn-lg active m-2" href="/projects/rgb_app">Preview</a>
										<a className="btn btn-dark btn-lg active m-2" href="https://github.com/Matt525/RGBColorGame">Code</a>
									</header>
		
								</article>


								{/* <article>
									<header className="major">
										<h3><a href="/projects/patatap" className="link">Patatap</a></h3>
										<p>A musical animation app where typing triggers animation/music. A partial clone of Patatap.</p>
										<br />
										<a className="btn btn-dark btn-lg active m-2" href="/projects/patatap">Preview</a>
										<a className="btn btn-dark btn-lg active m-2" href="https://github.com/Matt525/patatapclone">Code</a>
									</header>
		
								</article> */}

		
	
			
							</section>
							<a href="localhost:3000/projects_page"  class="moreProjects btn btn-primary btn-lg btn-block">More Projects</a>


						{/* <!-- 
						Section Two --> */}
							<section id="two">
								<div className="inner">
									<header className="major">
										<h2>Let's Work Together!</h2>
									</header>
									<p>As a self taught Front End Developer, I am currently seeking full time employment within the web & software development industry. I am extremely enthusiastic towards taking on new projects and always learning to continue to develop my skill set. I believe that there is always room for improvement when it comes to anything. Projects, work & personal relationships and physical health. I would love for you to reach out so that we could further discuss how I could become a great addition to your team. C'mon.. Take a chance with me and reach out! I look forward to hearing from you!</p>
									<ul className="actions">
										<li><a href="/" style={{marginTop: '10px'}} className="button next">Contact Me</a></li>
									</ul>
								</div>
							</section>
							

					</div>
        )
    }
}





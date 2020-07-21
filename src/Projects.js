import React from 'react';
import './main.css';

export default class Projects extends React.Component{
    render(){

        return(
            <div id="main">

									{/* Weather Application  */}

							<section id="one" className="tiles">
								<article style={{backgroundImage: 'url(&quot;images/pic01.jpg&quot)'}}>
									<header className="major">
										<h3><a href="/projects/weather_application" className="link">Weather Application</a></h3>
										<p>Weather API Application pulling data by location.</p>
									</header>
									<a href="/projects/weather_application" className="link primary"></a>
								</article>

												{/* RGB Game Application  */}

								<article style={{backgroundImage: 'url(./weatherImage.jpeg)!important'}}>
									<header className="major">
										<h3><a href="/projects/rgb_app" className="link">Tempus</a></h3>
										<p>A RGB guessing game built with in JavaScript</p>
									</header>
									<a href="/projects/rgb_app" className="link primary"></a>
								</article>

										{/* Patatap Application  */}

								<article>
									<header className="major">
										<h3><a href="/projects/patatap" className="link">Magna</a></h3>
										<p>A musical animation app where typing triggers animation/music. A partial clone of Patatap.</p>
									</header>
								<a href="/projects/patatap" className="link primary"></a>
								</article>

											{/*  Breakout Game Application  */}

								<article style={{backgroundImage: 'url(&quot;images/pic03.jpg&quot)'}}>
									<header className="major">
										<h3><a href="/projects/breakout	" className="link">Magna</a></h3>
										<p>A generic breakout game built in pure javascript.</p>
									</header>
									<a href="/projects/breakout" className="link primary"></a>
								</article>

											{/* Ecommerce Web Site */}
	
								<article style={{backgroundImage: 'url(&quot;images/pic03.jpg&quot)', width: '100vw'}}>
									<header className="major">
										<h3><a href="/projects/ecommerce" className="link">Magna</a></h3>
										<p>An ecommerce shopping site built with ReactJS framework</p>
									</header>
								<a href="/projects/ecommerce" className="link primary"></a></article>
			
							</section>

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





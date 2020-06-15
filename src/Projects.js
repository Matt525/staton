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
										<p>feugiat amet tempus</p>
									</header>
									<a href="/projects/rgb_app" className="link primary"></a>
								</article>

										{/* Patatap Application  */}

								<article>
									<header className="major">
										<h3><a href="/projects/patatap" className="link">Magna</a></h3>
										<p>Lorem etiam nullam</p>
									</header>
								<a href="/projects/patatap" className="link primary"></a>
								</article>

											{/*  Breakout Game Application  */}

								<article style={{backgroundImage: 'url(&quot;images/pic03.jpg&quot)'}}>
									<header className="major">
										<h3><a href="/projects/breakout	" className="link">Magna</a></h3>
										<p>Lorem etiam nullam</p>
									</header>
									<a href="/projects/breakout" className="link primary"></a>
								</article>

											{/* Ecommerce Web Site */}
	
								<article style={{backgroundImage: 'url(&quot;images/pic03.jpg&quot)', width: '100vw'}}>
									<header className="major">
										<h3><a href="/projects/ecommerce" className="link">Magna</a></h3>
										<p>Lorem etiam nullam</p>
									</header>
								<a href="/projects/ecommerce" className="link primary"></a></article>
			
							</section>

						{/* <!-- 
						Section Two --> */}
							<section id="two">
								<div className="inner">
									<header className="major">
										<h2>Let's Partner On Your Next Project</h2>
									</header>
									<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
									<ul className="actions">
										<li><a href="landing.html" style={{marginTop: '10px'}} className="button next">Contact Me</a></li>
									</ul>
								</div>
							</section>

					</div>
        )
    }
}





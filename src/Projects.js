import React from 'react';
import './main.css';

export default class Projects extends React.Component{
    render(){

        return(
            <div id="main">

						{/* <!-- One --> */}
							<section id="one" className="tiles">
								<article style={{backgroundImage: 'url(&quot;images/pic01.jpg&quot)'}}>
									<span className="image" style={{display: 'none'}}>
										<img href="https://musing-morse-5eaa60.netlify.com" src="../src/rgb.jpeg" alt="" />
									</span>
									<header className="major">
										<h3><a href="https://musing-morse-5eaa60.netlify.com" className="link">Weather Application</a></h3>
										<p>Weather API Application pulling data by location.</p>
									</header>
								<a href="landing.html" className="link primary"></a></article>
								<article style={{backgroundImage: 'url(./weatherImage.jpeg)!important'}}>
									<span className="image" style={{display: 'none'}}>
										<img src="./rgb.jpeg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Tempus</a></h3>
										<p>feugiat amet tempus</p>
									</header>
								<a href="landing.html" className="link primary"></a></article>
								<article style={{backgroundImage: 'url(&quot;images/pic03.jpg&quot)'}}>
									<span className="image" style={{display: 'none'}}>
										<img src="images/pic03.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Magna</a></h3>
										<p>Lorem etiam nullam</p>
									</header>
								<a href="landing.html" className="link primary"></a></article>
								<article style={{backgroundImage: 'url(&quot;images/pic03.jpg&quot)'}}>
									<span className="image" style={{display: 'none'}}>
										<img src="images/pic03.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Magna</a></h3>
										<p>Lorem etiam nullam</p>
									</header>
								<a href="landing.html" className="link primary"></a></article>
							
			
							</section>

						{/* <!-- Two --> */}
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


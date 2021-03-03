import React from "react";

//HOME

export const Output = props => {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Conctact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<a className="btn btn-primary btn-lg" href="" role="button">
					Call to action!
				</a>
			</div>

			<div className="row">
				<div className="col-3">
					<div className="card">
						<img
							src="https://lh3.googleusercontent.com/proxy/CjG72QkpjQIGaGSvdjzHmcfgc15OpB_vwrd6K4rwampNOLscudOXZuT-x3xwbYRqstlNtnmTCHMIikyU7IuR49PzdjghHq5FuS0luIsidzeBjQ"
							className="card-img-top"
							alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Find out more!
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<img
							src="https://lh3.googleusercontent.com/proxy/CjG72QkpjQIGaGSvdjzHmcfgc15OpB_vwrd6K4rwampNOLscudOXZuT-x3xwbYRqstlNtnmTCHMIikyU7IuR49PzdjghHq5FuS0luIsidzeBjQ"
							className="card-img-top"
							alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Find out more!
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<img
							src="https://lh3.googleusercontent.com/proxy/CjG72QkpjQIGaGSvdjzHmcfgc15OpB_vwrd6K4rwampNOLscudOXZuT-x3xwbYRqstlNtnmTCHMIikyU7IuR49PzdjghHq5FuS0luIsidzeBjQ"
							className="card-img-top"
							alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Find out more!
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<img
							src="https://lh3.googleusercontent.com/proxy/CjG72QkpjQIGaGSvdjzHmcfgc15OpB_vwrd6K4rwampNOLscudOXZuT-x3xwbYRqstlNtnmTCHMIikyU7IuR49PzdjghHq5FuS0luIsidzeBjQ"
							className="card-img-top"
							alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Find out more!
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="card-footer text-white bg-dark text-center">
				Copyright © YourWebsite 2021
			</div>
		</div>
	);
};

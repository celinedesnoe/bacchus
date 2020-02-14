import React, { Component } from 'react';
import Input from './Input.jsx';
import { Link } from "react-router-dom";


class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
		};
	}


	render() {
		return (
			<div className="background-home text-white d-flex align-items-center justify-content-center flex-column">

				<div className="mb-4 d-flex flex-column align-items-center justify-content-center">
					<h2 className="permanent">Bacchus</h2>
					<h3 className="subtitle">Know your wine</h3>
				</div>

				<div className={`loader  loader-homepage-done  `} />

				<div className="log-in-box d-flex align-items-center flex-column mt-3">
					<h4 className="my-4 text-dark">Log in to your cellar</h4>
					<form onSubmit={console.log('SUBMIT')}>
						<div className="w-100 px-5">
							<Input placeholder="Email" className="mb-2" />
						</div>
						<div className="w-100 px-5">
							<Input placeholder="Password" className="mb-2" />
						</div>
						<Link to="/dashboard" >
							<div className="w-100 px-5 mt-3">
								<div className="button">Log in</div>
							</div>
						</Link>

					</form>
				</div>

			</div>
		);
	}
}

export default HomePage;

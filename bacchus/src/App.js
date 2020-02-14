import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: false
		};
	}
	render() {
		return (
			<div className="App">
				<Switch>
					{this.state.currentUser ? (
						<Route
							exact
							path="/"
							render={() => {
								return (
									<div>HELLO WELCOME</div>
									// <Dashboard
									//   // toLogout={() => this.logoutClick()}
									//   // currentUser={this.state.currentUser}
									//   // rerouteUrl="/"
									//   // onFollowCurrentUser={user => this.updateUser(user)}
									// />
								);
							}}
						/>
					) : (
						<Route exact path="/" component={HomePage} />
					)}
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
		);
	}
}

export default App;

import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "", isLoaded: false
    };
  }

componentDidMount () {
setTimeout(() => {this.setState({isLoaded : true})}, 1000)
}

  render() {
    let {isLoaded} = this.state;
    return (
      <div className="bg-primary background-home text-white d-flex align-items-center justify-content-center flex-column">
          {isLoaded && <div className="mb-4"><div className="title-bacchus d-flex align-items-center justify-content-center">Bacchus</div><div className="subtitle">Know your wine</div></div>}
          <div className={`loader ${isLoaded ? "loader-homepage-done" :"loader-homepage"} `}></div>
          {isLoaded && <div className="log-in-box"><div>Log in to your cellar</div></div>}
      </div>
    );
  }
}

export default HomePage;

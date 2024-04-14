import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("console from CDM");
    this.timer=setInterval(() => {
      console.log("setinterval from CDM");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("About updated");
  }

  componentWillUnmount() {
    console.log("About unmounted");
    clearInterval(this.timer);
  }

  render() {
    const clickHandler = () => {
      this.setState({
        count: this.state.count + 1,
        message: "bala",
        eroor: "nothing",
      });
    };

    return (
      <div>
        <h1>About page</h1>
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            clickHandler();
          }}
        >
          increse
        </button>
      </div>
    );
  }
}

export default About;

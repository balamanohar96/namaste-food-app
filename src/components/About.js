import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "About",
      count: 0,
    };
  }
  componentDidMount() {
    console.log("console from CDM");
    this.timer = setInterval(() => {
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
      });
    };
    console.log(clickHandler);
    return (
      <div className="py-12 px-5 md:p-6">
        <h3 className="text-center font-bold text-xl text-orange-600">
          {this.state.text} page
        </h3>
        <ul className="list-disc"></ul>
        <li>This application is swiggy clone website.</li>
        <li>
          I have used swiggy's API to fetch list of restaurants and their
          respective menu.
        </li>
        <li>This app is only for educational purpose.</li>
        <li>
          I have used ReactJs, Redux toolkit, Tailwind CSS to built this
          application.
        </li>
      </div>
    );
  }
}

export default About;

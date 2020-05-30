import React from 'react';
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ColorOne: 'Red',
      ColorTwo: 'Yellow',
      ColorThree: 'Green',
    }
  }
  RedLight() {
    console.log(this.state.ColorOne);
    this.setState({
      ColorOne: "RedLightning",
      ColorTwo: "Yellow",
      ColorThree: "Green",
    })
  }
  YellowLight() {
    console.log(this.state.ColorTwo);
    this.setState({
      ColorTwo: "YellowLightning",
      ColorOne: "Red",
      ColorThree: "Green",
    })
  }
  GreenLight() {
    console.log(this.state.ColorThree);
    this.setState({
      ColorThree: "GreenLightning",
      ColorOne: "Red",
      ColorTwo: "Yellow",
    })
  }


  render() {
    return (
      <>
        <div className="container">
          <div className="palo"></div>
          <div className="Semaforo">
            <div className={this.state.ColorOne} onClick={() => { this.RedLight() }}></div>
            <div className={this.state.ColorTwo} onClick={() => { this.YellowLight() }}></div>
            <div className={this.state.ColorThree} onClick={() => { this.GreenLight() }}></div>
          </div>
        </div>
      </>
    )
  }
}



export default App; 
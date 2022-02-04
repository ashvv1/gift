import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    const img0 = <img alt='' src={require('./pics/boxclosed1.jpg')}/>;
    const img1 = <img alt='' src={require('./pics/boxopen1.jpg')}/>;
    const img2 = <img alt='' src={require('./pics/boxopening1.gif')}/>;
    const blank = <p></p>;
    const message1 = <p>It's already open, what else do you want?</p>

    this.state = {
      index: 0,
      messagecount: 0,
      imgList: [img0,img1,img2],
      message: [blank, message1]
    }
  }

  render() {
    const onOpen = () => {

      if (this.state.index < 2) {
      this.setState({
        index: this.state.index + 1
      })}else{
        this.setState({index: this.state.index})
        this.setState({
          messagecount: this.state.messagecount + 1
        })
      };
      };
    ;
    return (
      <div>
          {this.state.imgList[this.state.index] }
          {this.state.message[this.state.messagecount]}
          <div><button onClick={onOpen}>Open</button></div>

      </div>

    )
  }
}

export default App;


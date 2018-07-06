import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={this._handleClick.bind(this)}>Radom</button>
        <Coverflow
          width={1200}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
            role="menuitem"
            tabIndex="0"
          >
            <img src='images/album-1.jpg' alt='Album one' />
          </div>
          <img src='images/album-2.png' alt='Album two' data-action="https://codigofacilito.com"/>
          <img src='images/album-3.jpg' alt='Album three' data-action="https://codigofacilito.com"/>
          <img src='images/album-4.jpg' alt='Album four' data-action="https://codigofacilito.com"/>
          <img src='images/album-5.jpg' alt='Album five' data-action="https://codigofacilito.com"/>
          <img src='images/album-6.jpg' alt='Album six' data-action="https://codigofacilito.com"/>
          <img src='images/album-7.jpg' alt='Album seven' data-action="https://codigofacilito.com"/>
          <img src='images/album-8.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
          <img src='images/album-9.jpg' alt='Album two' data-action="https://codigofacilito.com"/>
          <img src='images/album-10.jpg' alt='Album three' data-action="https://doce.cc/"/>
          <img src='images/album-11.jpg' alt='Album four' data-action="https://codigofacilito.com"/>
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};

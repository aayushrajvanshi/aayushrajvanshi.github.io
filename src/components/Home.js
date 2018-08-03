import React, { Component } from 'react';
import './styles/home.css';
import $ from 'jquery';

export default class Home extends Component {
  handleClick = () => {
    $('.column-1,.column-2,.column-3').toggleClass('close');
  };
  render() {
    return (
      <div className="container">
        <div id="modal" className="modal">
          <div className="column-1" />
          <div className="column-2" />
          <div className="column-3" />
        </div>
        <div className="button" onClick={this.handleClick} />
      </div>
    );
  }
}

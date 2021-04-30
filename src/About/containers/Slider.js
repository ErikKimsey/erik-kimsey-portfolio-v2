import React, { Component } from 'react'
import './styles/slider.scss';
import { isContainer } from 'postcss-selector-parser';

export default class SimpleSlider extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      index:1,
    }
  }

  componentDidMount() {
    
  }

  handleForwardToggle = () => {
    if(this.state.index <= this.state.data.length-2){
      this.setState({index: this.state.index+1})
    } else {
      this.resetIndex();
    }
  }
  handleBackwardToggle = () => {
    if(this.state.index > 0){
      this.setState({index: this.state.index-1})
    } else if(this.state.index <= 0) {
      this.resetIndex();
    }
  }

  resetIndex = () => {
    this.setState({index: 1});
  }
  
  render() {
    return (
      <div className="slider-container">
        <div className="slider-item-container">
          <i className="fas fa-caret-left" onClick={()=>{this.handleBackwardToggle()}}></i>

          <i className="fas fa-caret-right" onClick={this.handleForwardToggle}></i>
            <div className="slider-item" title={this.state.data[this.state.index]}>
              {this.state.data[this.state.index]}
            </div>
          </div>
      </div>
    )
  }
}

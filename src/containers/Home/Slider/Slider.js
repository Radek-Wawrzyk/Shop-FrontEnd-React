//libraries
import React, {Component} from 'react';
import classes from "./Slider.scss";

import data from './data';

import SliderItem from "../../../components/Home/Slider/SliderItem/SliderItem";
import SliderDot from "../../../components/Home/Slider/SliderDot/SliderDot";

let number = null;

class Slider extends Component {
  state = {
    'number': 0,
  }

  componentDidMount() {
    this.startInterval()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startInterval = () => {
    this.interval = setInterval(() => this.changeSlide(), 5000);
  }

  slideHandler = (props) => {
    number = props.target.id
    this.setState({
      number: number
    })
    clearInterval(this.interval)
    this.startInterval()
  }

  checkClass = (props) => {
    if (props == this.state.number) {
      return classes.Active
    }
    else {
      return classes.Hide
    }
  }

   changeSlide = () => {
    number ++
    if (number > 2) {
      number = 0
    }
    this.setState({
      number: number
    })
  }


  render() {

    let sliderItem =
    <SliderItem imgUrl={data[this.state.number].imgUrl} 
                key = {data[this.state.number].id} 
                product_name = {data[this.state.number].product_name} 
                price ={data[this.state.number].price} 
                description={data[this.state.number].description} 
  />
    return (
      <section className={classes.Slider}>
        <ul className={classes.SliderList} >
          {sliderItem}
        </ul>
        <ul className={classes.SliderDots}>
          {data.map((data, index) => <SliderDot key={data.id} id={data.id} clicked={this.slideHandler} isActive={this.checkClass(index)} /> )}
        </ul>
    </section>
    )
  }
}


export default Slider;

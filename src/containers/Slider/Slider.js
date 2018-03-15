//libraries
import React, {Component} from 'react';
import classes from "./Slider.scss";

import data from './data';

import SliderItem from "../../components/Home/Slider/SliderItem/SliderItem";
import SliderDot from "../../components/Home/Slider/SliderDot/SliderDot";

let number = null;

class Slider extends Component {
  state = {
    'number': 0,
  }

  componentDidMount() {
    this.startInterval()
  }

  startInterval = () => {
    this.interval = setInterval(() => this.changeSlide(), 3000);
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
    if (number == 3) {
      number = 0
    }
    this.setState({
      number: number
    })
  }


  render() {

    let sliderItem = data.map((data) => <SliderItem imgUrl={data.imgUrl} key = {data.id} product_name = {data.product_name} price ={data.price} description={data.description} style={{opacity: 0}}
      isActive={this.checkClass(data.id)}
    />)

    return (
      <section className={classes.Slider}>
        <ul className={classes.SliderList} >
          {sliderItem}
        </ul>
        <ul className={classes.SliderDots}>
          <SliderDot id="0" clicked={this.slideHandler} isActive={this.checkClass(0)}/>
          <SliderDot id="1" clicked={this.slideHandler} isActive={this.checkClass(1)}/>
          <SliderDot id="2" clicked={this.slideHandler} isActive={this.checkClass(2)}/>
        </ul>
    </section>
    )
  }
}


export default Slider;

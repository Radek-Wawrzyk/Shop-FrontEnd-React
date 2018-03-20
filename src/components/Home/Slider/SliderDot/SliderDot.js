import React from 'react';

const sliderDot = (props) => {
  let activeIndex = props.isActive ? props.isActive : null
  return (
    <li id={props.id} onClick={props.clicked} className={activeIndex}></li>
  )
}

export default sliderDot

//libraries
import React from 'react';
import './home.css';

const home = (props) => (
<main>
  <section className="slider">
    <ul className="slider-list">
      <li className="slider-item">
        <div className="slider-item-content">
          <h1 className="slider-item-title">Rolex aka "zielone szkiełko"</h1>
          <p className="slider-item-description">Zegarek z najwyższej jakości materiałów nie dla biedaków</p>
          <div className="item">
            <button className="btn">Kup teraz</button>
            <p>10.000 zł</p>
          </div>
        </div>
      </li> 
    </ul>
    <ul className="slider-dots">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>
</main>
)

export default home;

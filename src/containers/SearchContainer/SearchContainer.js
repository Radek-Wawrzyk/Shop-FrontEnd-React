import React, { Component } from 'react';

//images
import Logo from '../../assets/images/Rolex_Logo.png';

//classes
import classes from './SearchContainer.scss';

class SearchContainer extends Component {
 
    render () {
    let isHide = classes.Hide
    if (this.props.show) {
        isHide = null
    }
    else {
        isHide = classes.Hide
    }
        return (
            <div className={classes.Container + ' ' + isHide}>
                <div className={classes.SearchPanel} >
                    <span></span>
                        <div className={classes.LogoContainer}>
                            <img src={Logo} alt="Rolex-Logo"/> 
                        </div>
                     <span onClick={this.props.clicked}>X</span>
                </div>
                <h4>Wyszukaj...</h4>
                <div className={classes.InputContainer}> 
                    <input type = "text" className = {classes.InputElement} 
                    placeholder="Wyszukaj produkt"/>
                    <ul>
                        <a href=""> 
                            <li> <img src={Logo} alt="Zegarek"/>Nazwa produktu pierwszy</li>
                        </a>
                        <a href=""> 
                            <li> <img src={Logo} alt="Zegarek"/>Nazwa produktu pierwszy</li>
                        </a>
                        <a href=""> 
                            <li> <img src={Logo} alt="Zegarek"/>Nazwa produktu pierwszy</li>
                        </a>
                        <a href=""> 
                            <li> <img src={Logo} alt="Zegarek"/>Nazwa produktu pierwszy</li>
                        </a>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default SearchContainer;

//libraries
import React, { Component } from 'react';
//containers
import Auxa from '../Auxa/Auxa';

import classes from './Content.scss';


class Content extends Component {
    render () {
        return (
            <Auxa>
              <div className={classes.Content + ' ' + this.props.className}>
                {this.props.children}
              </div>
            </Auxa>
        )
    }
}

export default Content;

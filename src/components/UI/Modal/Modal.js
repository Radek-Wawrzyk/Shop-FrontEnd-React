import React, { Component } from 'react';

import classes from './Modal.scss';
import Auxa from '../../../hoc/Auxa/Auxa';

class Modal extends Component {

    render () {
        return (
            <Auxa>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0.0'
                    }}
                    >
                    {this.props.children}
                </div>
            </Auxa>
        )
    }
}

export default Modal;

import React from 'react';
import './button.scss';

const Button = (props) => {
    const { classNames, title, clickEvent } = props;

    return (
        <button className={classNames} onClick={clickEvent}>{title}</button>
    );
}

export default Button;
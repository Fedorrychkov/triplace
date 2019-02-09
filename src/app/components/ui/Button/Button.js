import React from 'react';
import './button.scss';

const Button = (props) => {
    const { classNames, title, clickEvent, disable } = props;

    return (
        <button disabled={!disable} className={classNames} onClick={clickEvent}>{title}</button>
    );
}

export default Button;
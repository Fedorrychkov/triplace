import React from 'react';
import './form-link.scss';


const FormLink = (props) => {
    const { title, icon } = props;

    return (
        <a href="#2" className="form-link">
            <div className="form-link__icon"><img src={ icon } alt={title}/></div>
            <span>{ title }</span>
        </a>
    );
}

export default FormLink;
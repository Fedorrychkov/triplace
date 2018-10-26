import React from 'react';
import './input.scss';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            value: ''
        };

        this.inputFocus =  this.inputFocus.bind(this);
        this.changeHandler =  this.changeHandler.bind(this);
        this.inputBlur =  this.inputBlur.bind(this);
    }
    

    inputFocus(e) {
        this.setState({focus: true});
    }

    inputBlur(e) {
        if (e.length === 0) {
            this.setState({focus: false});
        }
    }

    changeHandler(value) {
        this.setState({value: value});
    }

    render() {
        return (
            <div className={ `input__field ${this.state.focus ? 'focus' : ''} ${this.state.value.length > 0 ? 'active' : ''}`}>
                <label htmlFor={ this.props.formControlName } className="input__label">{ this.props.placeholder }</label>
                <input type={ this.props.type } name={ this.props.formControlName } className="input__control" placeholder=" " {...this.props.required} onFocus={this.inputFocus} onBlur={e => this.inputBlur(e.target.value)} value={this.state.value} onChange={e => this.changeHandler(e.target.value)} />
                <span className="input__error-label"></span>
            </div>
        );
    }
}

export default Input;
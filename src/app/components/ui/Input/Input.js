import React from 'react';
import './input.scss';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            input: React.createRef()
        };

        this.inputFocus =  this.inputFocus.bind(this);
        this.inputBlur =  this.inputBlur.bind(this);
    }
    

    inputFocus(e) {
        this.setState({focus: true});

        if (e === false) {
            this.setState({focus: false});
        }
    }

    inputBlur(e) {
        if (e.length === 0) {
            this.setState({focus: false});
        }
    }

    render() {
        return (
            <div className={ `input__field ${this.props.classList} ${this.state.focus ? 'focus' : ''} ${this.props.inputValue.length > 0 ? 'active' : ''}`}>
                <label htmlFor={ this.props.formControlName } className="input__label">{ this.props.placeholder }</label>
                <input ref={this.state.field}
                    type={ this.props.type }
                    name={ this.props.formControlName } 
                    className="input__control"
                    placeholder=" " 
                    {...this.props.required} 
                    onFocus={this.inputFocus} 
                    onBlur={e => this.inputBlur(e.target.value)}
                    value = {this.props.inputValue}
                    onChange={e => this.props.inputChange(e.target.value)}
                    autoComplete="false" />
                <span className="input__error-label"></span>
            </div>
        );
    }
}

export default Input;
import React, {Fragment} from 'react';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import * as uuid4 from 'uuid/v4';

import './add-purpose.scss';

export default class AddPurpose extends React.Component {
  state = {
    title: '',
    titleField: React.createRef(),
    short: '',
    shortField: React.createRef(),
    checklist: []
  }

  handleClick = () => {
    this.state.title.length > 0 && this.state.short.length > 0 &&
    this.props.closeEvent({id: uuid4(), placeId: this.props.placeId, title: this.state.title, short: this.state.short});
  }

  changeHandler = name => event => {
      this.setState({
        [name]: event
      });
  }

  render() {
    return (
      <Fragment>
        <div className={'add-purpose ' + this.props.classes}>
          <div className="add-purpose__container">
            <h3 className="add-purpose__title">Новая цель</h3>
            <Input
              ref={this.state.titleField}
              formControlName="title"
              inputChange={this.changeHandler('title')}
              inputValue={this.state.title}
              autofocus={true}
              placeholder="Цель" type="text" />
            <Input
              ref={this.state.shortField}
              formControlName="short"
              inputChange={this.changeHandler('short')}
              inputValue={this.state.short}
              placeholder="Описание" type="text" />
            <Button disable={this.state.title.length > 0 && this.state.short.length > 0} classNames="button button-welcome" clickEvent={this.handleClick} title="Добавить"/>
          </div>
        </div>
      </Fragment>
    )
  }
}

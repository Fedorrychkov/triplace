import React, {Fragment} from 'react';
import './purpose.scss';

export default class Purpose extends React.Component {
  state = {
    done: false,
  }

  render() {
    return (
      <Fragment>
        <article className="purpose">
          <h4 className="purpose__title">{this.props.item.title}</h4>
          <p className="purpose__short">{this.props.item.short}</p>
        </article>
      </Fragment>
    )
  }
}

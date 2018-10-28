import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Swipe from 'react-easy-swipe';

import './place-item.scss';
import NotificationAlert from '../NotificationAlert/NotificationAlert';

class PlaceItem extends React.Component {
    constructor(props) {
        super(props);
        this.placeRef = React.createRef();
    }
    
    state = {
        notifIsOpen: false
    };
    
    refRevert = () => {
        this.placeRef.current.style.transform = 'none';
        this.placeRef.current.style.opacity = 1;
    }

    onSwipeMove = (position, event) => {
        if (position.x > 10) {
            this.placeRef.current.style.transform = `translateX(${position.x}px)`;
            this.placeRef.current.deleteOffset = position.x;
            this.placeRef.current.style.opacity = (1000 - position.x*2)/1000;
        }
    }
    
    onSwipeEnd = (event) => {
        
        if (this.placeRef.current.deleteOffset < 150) {
            this.refRevert();
        } 
        if (this.placeRef.current.deleteOffset > 150) {
            this.setState({notifIsOpen: true});
        }
    }

    acceptClick = (e) => {
        this.props.removePlace({id: this.props.objectPlace.id});
    }

    cancelClick = (e) => {
        this.setState({notifIsOpen: false});
        this.refRevert();
    }

    render() {
        return (
            <Swipe
                onSwipeMove={this.onSwipeMove}
                onSwipeEnd={this.onSwipeEnd}>
                <Link to={`/place/${this.props.objectPlace.id}`} key={this.props.objectPlace.id}>
                    <article className="place-item" ref={this.placeRef}>
                        <div className="place-item__name">
                            { this.props.objectPlace.placeName }
                        </div>
                    </article>
                </Link>
                <div>
                    {
                        this.state.notifIsOpen && ReactDOM.createPortal(
                            <NotificationAlert acceptClick={this.acceptClick} cancelClick={this.cancelClick} title='Удалить эту поездку?' alert='Все данные об этой поездке будут утеряны' />,
                            document.getElementById('notifalert')
                        )
                    }
                </div>
            </Swipe>
        );
    }
}

export default PlaceItem;
import React from 'react';
import './place-item.scss';
import Swipe from 'react-easy-swipe';

const PlaceItem = (props) => {
    const { objectPlace, removePlace } = props;

    const placeRef = React.createRef();
    
    const onSwipeMove = (position, event) => {
        if (position.x > 10) {
            placeRef.current.style.transform = `translateX(${position.x}px)`;
            placeRef.current.deleteOffset = position.x;
            placeRef.current.style.opacity = (1000 - position.x*2)/1000;
        }
    }
    
    const onSwipeEnd = (event) => {
        if (placeRef.current.deleteOffset < 150) {
            placeRef.current.style.transform = 'none';
            placeRef.current.style.opacity = 1;
        } else {
            removePlace({id: objectPlace.id});
        }
    }

    return (

        <Swipe
            onSwipeMove={onSwipeMove}
            onSwipeEnd={onSwipeEnd}>
                <article className="place-item" ref={placeRef}>
                    <div className="place-item__name">
                        { objectPlace.placeName }
                    </div>
                </article>
        </Swipe>
    );
};

export default PlaceItem;
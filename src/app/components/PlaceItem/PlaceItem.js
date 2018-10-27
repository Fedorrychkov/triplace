import React from 'react';
import './place-item.scss';

const PlaceItem = (props) => {
    const { objectPlace } = props;

    return (
        <article className="place-item">
            <div className="place-item__name">
                { objectPlace.placeName }
            </div>
        </article>
    );
};

export default PlaceItem;
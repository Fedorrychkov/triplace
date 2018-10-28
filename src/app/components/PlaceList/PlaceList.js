import React from 'react';
import SmartPlaceItem from '../../containers/SmartPlaceItem/SmartPlaceItem';

import './places.scss';

const PlaceList = (props) => {
    const { places } = props;
    
    return (
        <section className="places">
            { places.length === 0 ? <div className="places__nope">
                <h4 className="title places__nope-title">Куда Вы хотите съездить?</h4>
                <p className="places__nope-content">Просто наберите название и выберите способ добавления, на карту или по названию</p>
                <p className="places__nope-content offset-top-1">Добавленное место можно редактировать, ставить себе цели и задачи, выполнение которых приблизит вашу поездку</p>
            </div> : '' }
            <div className="places__content">
                {
                    places.reverse().map(item => {
                        return <SmartPlaceItem key={item.id} objectPlace={item} />;
                    })
                }
            </div>
        </section>
    );
}

export default PlaceList;

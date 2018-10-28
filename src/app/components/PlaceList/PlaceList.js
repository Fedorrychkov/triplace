import React from 'react';
import { Link } from 'react-router-dom';
import PlaceItem from '../PlaceItem/PlaceItem';

import './places.scss';

const PlaceList = (props) => {
    const { places } = props;
    console.log(props);

    const openPlace = (id) => {
        console.log(id);
        props.getPlace({id: id});
    }
    
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
                        return <Link to={`/place/${item.id}`} key={item.id} onClick={e => openPlace(item.id)}><PlaceItem key={item.id} objectPlace={item} /></Link>;
                    })
                }
            </div>
        </section>
    );
}

export default PlaceList;

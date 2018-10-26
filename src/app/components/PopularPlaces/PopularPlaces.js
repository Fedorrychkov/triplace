import React, { Fragment } from 'react';
import './popular-places.scss';

const PopularPlaces = (props) => {
    return (
        <Fragment>
            <section className="popular-places">
                <h3 className="popular-places__title title">Популярные места</h3>
                <div className="popular-places__content">
                    <p className="content">Здесь пока ничего нет, но скоро мы это поправим ;)</p>
                </div>
            </section>
        </Fragment>
    );
};

export default PopularPlaces;

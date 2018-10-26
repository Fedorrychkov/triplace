import React, { Fragment } from 'react';
import './add-place.scss';

import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import FormLink from '../ui/FormLink/FormLink';

import mapIcon from '../../../assets/img/icon/planet-earth.svg';

const AddPlace = (props) => {

    const addPlace = () => {

    }

    return (
        <Fragment>
            <section className="add-place">
                <h3 className="add-place__title title">Мои места</h3>
                <div className="add-place__content">
                    <div className="add-place__control">
                        <Input formControlName="place" placeholder="Добавить новое место" type="text" />
                        <div className="add-place__button">
                            <FormLink title="Указать на карте" icon={mapIcon} />
                            <Button classNames="button" clickEvent={addPlace} title="Хочу сюда" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default AddPlace;
import React, { Fragment } from 'react';
import * as uuidV4 from 'uuid/v4'; 
import * as moment from 'moment';

import './add-place.scss';

// import Input from '../ui/Input/Input';
import SmartPlaceSearch from '../../containers/SmartPlaceSearch/SmartPlaceSearch';

// import Button from '../ui/Button/Button';
// import FormLink from '../ui/FormLink/FormLink';
import { ADD_PLACE } from '../../store/actionTypes';

// import mapIcon from '../../../assets/img/icon/planet-earth.svg';

class AddPlace extends React.Component  {

    state = {
        place: '',
        placeField: React.createRef()
    }
    
    
    submitPlace = () => {
        if (this.state.place.length >= 2 ) {
            this.props.addPlace(ADD_PLACE, {place: {id: uuidV4(), placeName: this.state.place, createdDate: moment()}});
            this.setState({place: ''});
            this.state.placeField.current.inputFocus(false);
        }       
    }

    changeHandler = (value) => {
        this.setState({place: value});
    } 

    render () {
        return (
            <Fragment>
                <section className="add-place">
                    {/* <h3 className="add-place__title title">Мои места</h3> */}
                    <div className="add-place__content">
                        <div className="add-place__control">
                            <SmartPlaceSearch />
                            {/* <Input ref={this.state.placeField} formControlName="place" inputChange={this.changeHandler} inputValue={this.state.place} placeholder="Добавить новое место" type="text" /> */}
                            {/* <div className="add-place__button">
                                <FormLink title="Указать на карте" icon={mapIcon} />
                                <Button classNames="button" clickEvent={this.submitPlace} title="Хочу сюда" />
                            </div> */}
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default AddPlace;
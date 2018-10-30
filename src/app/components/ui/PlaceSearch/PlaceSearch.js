import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as uuidV4 from 'uuid/v4'; 
import * as moment from 'moment';

import './place-search.scss';

import Input from '../Input/Input';
import { ADD_PLACE } from '../../../store/actionTypes';

class PlaceSearch extends React.Component {
    state = {
        place: '',
        placeField: React.createRef(),
        popularPlaces: [
            {name: 'Нью-Йорк', geocode: 'Северная Америка, США'},
            {name: 'Амстердам', geocode: 'Северная Америка, США'},
            {name: 'Бразилия', geocode: 'Северная Америка, США'},
            {name: 'Сан-Франциско', geocode: 'Северная Америка, США'},
            {name: 'Австралия', geocode: 'Северная Америка, США'},
            {name: 'Денвер', geocode: 'Северная Америка, США'},
            {name: 'Нью-Йорк1', geocode: 'Северная Америка, США'},
            {name: 'Амстердам2', geocode: 'Северная Америка, США'},
            {name: 'Бразилия3', geocode: 'Северная Америка, США'},
            {name: 'Сан-Франциско4', geocode: 'Северная Америка, США'},
            {name: 'Австралия5', geocode: 'Северная Америка, США'},
            {name: 'Денвер6', geocode: 'Северная Америка, США'},
            {name: 'Сан-Франциско40', geocode: 'Северная Америка, США'},
            {name: 'Австралия50', geocode: 'Северная Америка, США'},
            {name: 'Денвер60', geocode: 'Северная Америка, США'},
        ],
        places: []
    }

    constructor(props) {
        super(props);
        if (!this.props.placeSearchIsOpen) {
            document.location.hash = ''
        }
    }

    switchForm = () => {
        this.props.updatePlaceSearch(this.props.placeSearchState);

        if (this.props.placeSearchState === 'PLACESEARCH_OPEN') {
            document.location.hash = ''
        }
    }

    componentDidMount = () => {
        window.addEventListener('hashchange', (event) => {

            if (document.location.hash !== '#place-search' && this.props.placeSearchIsOpen) {
                this.props.updatePlaceSearch(this.props.placeSearchState);
            }
        });

        this.setState({places: this.state.popularPlaces});

    }

    changeHandler = (value) => {
        const placeList = this.state.popularPlaces.filter(item => {
            const name = value.toLowerCase();
            const itemName = item.name.toLowerCase();
            if (itemName.indexOf(name.toLowerCase()) !== -1) {
                return item;
            }
        });

        this.setState({place: value, places: placeList});
    }

    addPlaceHandler = (place) => {
        this.props.addPlace(ADD_PLACE, {place: {id: uuidV4(), placeName: place.name, placeDetail: place.geocode, createdDate: moment()}});
        this.switchForm();
    }

    render() {
        return (
            <div className="place-search">
                <a href="#place-search" className="place-search__start" onClick={this.switchForm}>
                    <span className="place-search__start-label">Хочу поехать куда-нибудь</span>
                </a>
                
                { ReactDOM.createPortal( 
                    <Fragment>
                        <div className={`place-search__overflow ${this.props.placeSearchIsOpen ? 'open' : ''}`} onClick={this.switchForm}></div>
                        <div className={`place-search__form ${this.props.placeSearchIsOpen ? 'open' : ''}`}>
                            <div className="place-search__form-body">
                                <div className="control">
                                    <button className="place-search__form-close" onClick={this.switchForm}></button>
                                    <Input ref={this.state.placeField} formControlName="place" classList='underline' inputChange={this.changeHandler} inputValue={this.state.place} placeholder="Добавить новое место" type="text" />
                                </div>
                                <aside className="place-search__form-places">
                                    { this.state.places.map((item) => {
                                        return (
                                            <article key={item.name} className="place-search__place" onClick={() => this.addPlaceHandler(item)}>
                                                <p className="name">{item.name}</p>
                                                <span className="geocode">{item.geocode}</span>
                                            </article>
                                        );
                                    }) }
                                </aside>
                                <aside className="place-search__form-control">
                                    <a className="tomap" href="#place-search-map">Указать на карте</a>
                                </aside>
                            </div>
                        </div>
                    </Fragment>,
                    document.getElementById('placesearch')) }
            </div>
        );
    }
}

export default PlaceSearch;
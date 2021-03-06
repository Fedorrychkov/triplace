import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import * as uuidV4 from 'uuid/v4'; 
import * as moment from 'moment';

import './place-search.scss';

import Input from '../Input/Input';
import { ADD_PLACE } from '../../../store/actionTypes';
import GoogleMapService from '../../../services/GoogleMapService';

class PlaceSearch extends React.Component {
    state = {
        place: '',
        placeField: React.createRef(),
        popularPlaces: [
            {name: 'Нью-Йорк', formatted_address: 'Нью-Йорк, США', place_id: 'ChIJOwg_06VPwokRYv534QaPC8g'},
            {name: 'Амстердам', formatted_address: 'Северная Голландия, Нидерланды', place_id: 'ChIJVXealLU_xkcRja_At0z9AGY'},
            {name: 'Бразилия', formatted_address: 'Бразилия', place_id: 'ChIJzyjM68dZnAARYz4p8gYVWik'},
            {name: 'Сан-Франциско', formatted_address: 'Сан-Франциско, Калифорния, США', place_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo'},
            {name: 'Австралия', formatted_address: 'Австралия', place_id: 'ChIJ38WHZwf9KysRUhNblaFnglM'},
            {name: 'Денвер', formatted_address: 'Денвер, Колорадо, США', place_id: 'ChIJzxcfI6qAa4cR1jaKJ_j0jhE'},
        ],
        places: []
    }

    constructor(props) {
        super(props);
        if (!this.props.placeSearchIsOpen) {
            document.location.hash = ''
        }
        this.google = new GoogleMapService();
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

        // this.google.placeGeocodeByAddress('Нью-Йорк').then(res => {
        //     console.log(res);
        // });

        // this.google.placeGeocodeById('ChIJOwg_06VPwokRYv534QaPC8g').then(res => {
        //     console.log(res[0]);
        // });
    }

    changeHandler = (value) => {
        let placeList = [];

        if (value.length > 2) {
            this.google.autoCompletePlace(value).then(res => {
                const geoplace = res.map(item => {
                    item.formatted_address = item.description;
                    item.name = item.structured_formatting.main_text;
                    return item;
                });
                placeList = geoplace.filter(item => {
                    const name = value.toLowerCase();
                    const itemName = item.name.toLowerCase();
                    return itemName.indexOf(name.toLowerCase()) !== -1;
                });
                this.setState({place: value, places: placeList});
            });
            return;
        }
        this.setState({place: value, places: this.state.popularPlaces});
    }

    addPlaceHandler = (place) => {
        this.setState({place: '', places: this.state.popularPlaces});
        this.google.placeGeocodeById(place.place_id).then(res => {
            place.address_components = res[0].address_components;
            place.formatted_address = res[0].formatted_address;
            place.id = uuidV4();
            this.props.addPlace(ADD_PLACE, {place: {...place, startDate: moment()}});
            this.switchForm();
        });
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
                                            <article key={item.id || item.place_id} className="place-search__place" onClick={() => this.addPlaceHandler(item)}>
                                                <p className="name">{item.name}</p>
                                                <span className="geocode">{item.formatted_address}</span>
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
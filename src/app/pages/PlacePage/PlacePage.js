import React, { Fragment } from 'react';

import GoogleImageService from '../../services/GoogleImageService';
// import * as uuidV4 from 'uuid/v4'; 
// import * as moment from 'moment';
import Swipe from 'react-easy-swipe';

import './place.scss';

// const ImageCard = (props) => {
//     return (
//         <div className="place__image"><img src={props.meta.url} alt={props.meta.description}/></div>
//     )
// }

const PlaceData = (props) => {
    const onSwipeMove = (position, event) => {
        if (position.x <= -90 && position.x >= -190) {
            props.updateHeader(false);
            document.location.hash = '';
        }
        if (position.x >= 90 && position.x <= 190) {
            props.updateHeader(false);
            document.location.hash = '';
        }
    };

    return (
        <Fragment>
            <h4 className="place__title">{ props.place.name }</h4>
            <p className="place__address">{  props.place.formatted_address}</p>
            <Swipe onSwipeMove={onSwipeMove}>
                {/* <section className="place__images-box">
                    <div className="place__images">
                        {props.images.map(item => {
                            return <ImageCard key={uuidV4()} meta={item} />
                        })}
                    </div>
                </section> */}
            </Swipe>
            
        </Fragment>
    )
}

class PlacePage extends React.Component {
    constructor(props) {
        super(props);
        this.googleImage = new GoogleImageService();
        this.state = {
            imageList: [],
            page: 1,
            isLoaded: false,
            addButtonOpen: false
        };
    }

    getImages = () => {
        // this.googleImage.getImageByName(this.props.place[0].formatted_address, this.state.page).then(res => {
        //     this.setState({imageList: res});
        // });
    }

    componentDidMount = () => {
        this.props.getPlace({id: this.props.match.params.id});
        this.setState({isLoaded: true});
        if (this.props.place.length > 0) this.getImages();
    }

    addButtonClick = () => {
        this.setState({addButtonOpen: !this.state.addButtonOpen});
    }

    render() {
        return (
            <main className="place container">
            { this.props.place.length > 0  && <PlaceData updateHeader={this.props.updateHeader} place={this.props.place[0]} images={this.state.imageList}/> }
                <section className="place__tasks">
                    <div className="place__tasks-empty">
                        <p className="">Здесь могут быть Ваши цели, выполняя которые вы будете приближаться к вашей поездке</p>
                    </div>
                </section>
                <aside className="place__add-button">
                    { this.state.addButtonOpen && <div className="place__add-overflow"></div> }
                    <div className={`place__add-list ${this.state.addButtonOpen ? 'open' : ''}`}>
                        <ul className="place__add-items">
                            <li className="place__add-item"> <button className="place__add-item-button">Добавить цель</button> </li>
                        </ul>
                    </div>
                    <button className="place__add-button__button circle-button" onClick={this.addButtonClick}></button>
                </aside>
            </main>
        );
    }
}

export default PlacePage;
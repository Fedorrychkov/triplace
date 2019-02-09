import React, { Fragment } from 'react';
import AddPurpose from '../../components/AddPurpose/AddPurpose';
import Purpose from '../../components/Purpose/Purpose';

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
            <div className="place__content">
                { props.place.purposes && props.place.purposes.length > 0 && <div className="place__purposes">
                    <h3>Цели</h3>
                    {props.place.purposes.map(item => {
                        return <Purpose key={item.id} item={item} />
                    })}
                </div>}
            </div>
            
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
            addButtonOpen: false,
            addPurpose: false,
            buttonOpenClose: false,
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
        console.log(this.props);
    }

    addButtonClick = (item) => {
        this.state.buttonOpenClose ? this.setState({addButtonOpen: false, buttonOpenClose: false, addPurpose: false}) :
            this.setState({addButtonOpen: !this.state.addButtonOpen});
        if (item.placeId) {
            this.props.addPurpose(item);
        }
    }

    addGoal = () => {
        this.setState({addButtonOpen: !this.state.addButtonOpen, addPurpose: true, buttonOpenClose: true});
    }

    render() {
        return (
            <main className="place container">
            <AddPurpose classes={this.state.addPurpose ? 'open': ''} placeId={this.props.match.params.id} closeEvent={this.addButtonClick}/>
            { this.props.place.length > 0  && <PlaceData updateHeader={this.props.updateHeader} place={this.props.place[0]} images={this.state.imageList}/> }
                <section className="place__tasks">
                    <div className="place__tasks-empty">
                        { this.props.place.length > 0 && !this.props.place[0].purposes &&
                        <p className="">Здесь могут быть Ваши цели, выполняя которые вы будете приближаться к вашей поездке</p> }
                    </div>
                </section>
                <aside className="place__add-button">
                    { this.state.addButtonOpen && <div className="place__add-overflow"></div> }
                    <div className={`place__add-list ${this.state.addButtonOpen ? 'open' : ''}`}>
                        <ul className="place__add-items">
                            <li className="place__add-item"> <button className="place__add-item-button" onClick={this.addGoal}>Добавить цель</button> </li>
                        </ul>
                    </div>
                    <button
                        className={`place__add-button__button circle-button  ${this.state.buttonOpenClose ? 'close': ''}`}
                        onClick={this.addButtonClick}></button>
                </aside>
            </main>
        );
    }
}

export default PlacePage;
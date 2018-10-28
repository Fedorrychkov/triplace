import React from 'react';
import './place.scss';

class PlacePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        this.props.getPlace({id: this.props.match.params.id});
    }

    render() {
        return (
            <main className="place container">
                is place { this.props.place.length > 0 ?  this.props.place[0].placeName : ''}
            </main>
        );
    }
}

export default PlacePage;
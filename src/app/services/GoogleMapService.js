export default class GoogleMapService {
    constructor() {
        this.geocoder = new window.google.maps.Geocoder();
        this.autocomplete = new window.google.maps.places.AutocompleteService();
    }

    autoCompletePlace(place) {
        return new Promise((res, rej) => {
            this.autocomplete.getPlacePredictions( { input: place}, (results, status) => {
                if (status === 'OK') {

                    if (process.env.NODE_ENV !== 'production') {
                        console.log(results);
                    }

                    res(results);
                } else {
                    if (process.env.NODE_ENV !== 'production') {
                        console.log('Autocomplete was not successful for the following reason:', status);
                    }
                    rej({err: 'Autocomplete was not successful for the following reason:', value: status})
                }
            })
        });
    }

    placeGeocodeByAddress(address) {
        return new Promise((res, rej) => {
            this.geocoder.geocode({address: address}, (results, status) => {
                if (status === 'OK') {
                    if (process.env.NODE_ENV !== 'production') {
                        console.log(results);
                    }
                    res(results);
                } else {
                    if (process.env.NODE_ENV !== 'production') {
                        console.log('Geocode was not successful for the following reason:', status);
                    }
                    rej({err: 'Geocode was not successful for the following reason:', value: status})
                }
            });
        });
    }

    placeGeocodeById(id) {
        const geometry = window.google.maps.GeocoderGeometry;
        return new Promise((res, rej) => {
            this.geocoder.geocode({placeId: id}, (results, status) => {
                if (status === 'OK') {
                    if (process.env.NODE_ENV !== 'production') {
                        console.log(results);
                    }
                    console.log(geometry)
                    res(results);
                } else {
                    if (process.env.NODE_ENV !== 'production') {
                        console.log('Geocode was not successful for the following reason:', status);
                    }
                    rej({err: 'Geocode was not successful for the following reason:', value: status})
                }
            });
        });
    }
}
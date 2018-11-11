import * as GoogleImages from 'google-images';
import environment from '../../config';

export default class GoogleImageService {
    constructor() {
        this.client = new GoogleImages('014210795839545508416:mucgn4mvute', environment.production.googleKey);
    }

    getImageByName(name, page = 1) {
        return new Promise((res, rej) => {
            this.client.search(name, {page: page, size: 'large', type: 'photo'}).then(response => {
                if (process.env.NODE_ENV !== 'production') {
                    console.log(response);
                }
                res(response);
            }, err => {
                rej(err);
            });
        });
    }
}
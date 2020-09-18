import { Injectable } from '@angular/core';
import { Feature } from './models/Feature';
import { Product } from './models/Product';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private products: Product[];
    private features: Feature[];

    constructor() {
        this.products = [
            {
                "id": 1,
                "title": "Our smart watch",
                "imgURL": "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti quisquam consectetur explicabo temporibus eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 2,
                "title": "Amazing resolution",
                "imgURL": "https://images.pexels.com/photos/759960/pexels-photo-759960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti quisquam consectetur explicabo temporibus eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
        ];

        this.features = [
            {
                "id": 1,
                "title": "Tempus feugait",
                "icon": "devices",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti quisquam consectetur explicabo temporibus eveniet"
            },
            {
                "id": 2,
                "title": "Aliguan nulla",
                "icon": "memory",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti quisquam consectetur explicabo temporibus eveniet"
            },
            {
                "id": 3,
                "title": "Sed magna",
                "icon": "cloud_queue",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti quisquam consectetur explicabo temporibus eveniet"
            }
        ];
    }

    getProducts() {
        return this.products;
    }

    getFeatures() {
        return this.features;
    }
}

import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Feature } from './models/Feature';
import { Product } from './models/Product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: Product[];
    features: Feature[];

    constructor(private homeService: HomeService) { }

    ngOnInit(): void {
        this.products = this.homeService.getProducts();
        this.features = this.homeService.getFeatures();
    }
}

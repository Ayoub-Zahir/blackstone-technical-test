import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {
    @Input() mode: any;
    imgURL: string;
    message: string;

    constructor() { }

    ngOnInit(): void {
        // Switching component content base on supplied mode
        switch (this.mode) {
            case 'notFound':
                this.imgURL = '../../../assets/img/page_not_found.svg';
                this.message = 'Page not found';
                break;
            case 'inProgress':
                this.imgURL = '../../../assets/img/under-construction.svg';
                this.message = 'This page is under progress...';
                break;
        }
    }

}

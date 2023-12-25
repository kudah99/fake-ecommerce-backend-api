import { Component, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    public data = {
        name: 'Fake ecommerce backend api',
        job: 'Create a simulated storefront REST API to use in your e-commerce or shopping website prototype.',
        punchline: "It's free"
    };

    public name: string = '';
    public job: string = '';
    public isVisibleTooltip: boolean = false;

    constructor(
        elRef: ElementRef<HTMLElement>,
        private readonly scrollService: ScrollService) {

        scrollService.registerSection('app', elRef.nativeElement, 'app');
        addEventListener('scroll', () => this.isVisibleTooltip = false);
    }

    public scrollToNext(): void {
        this.scrollService.scrollToNext();
    }
}

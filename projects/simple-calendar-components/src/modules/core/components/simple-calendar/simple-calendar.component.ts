import { Component, OnInit } from '@angular/core';
import { SimpleCalendarService } from './services/simple.calendar.service';

@Component({
    selector: 'simple-calendar',
    templateUrl: './simple-calendar.component.html',
    styles: [],
    providers: [SimpleCalendarService]
})
export class SimpleCalendarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}

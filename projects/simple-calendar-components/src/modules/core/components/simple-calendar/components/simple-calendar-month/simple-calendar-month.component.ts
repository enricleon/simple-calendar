import { Component, OnInit } from '@angular/core';
import { SimpleCalendarService } from '../../services/simple.calendar.service';
import { Moment } from 'moment';

@Component({
    selector: 'simple-calendar-month',
    templateUrl: './simple-calendar-month.component.html',
    styles: []
})
export class SimpleCalendarMonthComponent implements OnInit {
    monthDays: Array<Moment>;

    constructor(simpleCalendarService: SimpleCalendarService) { 
        simpleCalendarService.$monthDays.subscribe(monthDays => {
            this.monthDays = monthDays;
        });
    }

    ngOnInit() {
    }
}

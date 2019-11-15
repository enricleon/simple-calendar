import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CalendarDay } from '../../../../models/calendar-day';

@Component({
    selector: 'sc-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
    @Input()
    day: CalendarDay;

    @HostBinding('class.today') 
    isToday: boolean;

    constructor() {
    }

    ngOnInit() {
        this.isToday = this.day.isToday();
    }
}

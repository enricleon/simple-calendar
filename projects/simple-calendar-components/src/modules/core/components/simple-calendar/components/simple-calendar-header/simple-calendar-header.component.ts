import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../../../services/calendar.service';
import { SimpleCalendarService } from '../../services/simple.calendar.service';
import { Moment } from 'moment';

@Component({
    selector: 'simple-calendar-header',
    templateUrl: './simple-calendar-header.component.html',
    styleUrls: ['./simple-calendar-header.component.scss']
})
export class SimpleCalendarHeaderComponent implements OnInit {

    weekDays: Array<String>;
    monthDays: Array<Moment>;

    constructor(
        calendarService: CalendarService,
        simpleCalendarService: SimpleCalendarService
    ) {
        this.weekDays = calendarService.getWeekDays();

        simpleCalendarService.$monthDays.subscribe(monthDays => {
            this.monthDays = monthDays;
        });
    }

    ngOnInit() {
    }
}

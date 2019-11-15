import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from '../../../../models/calendar-day';

@Component({
    selector: 'sc-week',
    templateUrl: './week.component.html',
    styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
    @Input()
    week: CalendarDay[];

    constructor() {}

    ngOnInit() {
    }
}

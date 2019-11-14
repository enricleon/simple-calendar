import { Injectable } from '@angular/core';
import { Filter } from '../../../models/filter.model';

import * as moment_ from 'moment';
import { Moment } from 'moment';

const moment = moment_;

import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')

import { Observable, BehaviorSubject } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SimpleCalendarService {
    private _filter: BehaviorSubject<Filter> = new BehaviorSubject(null);
    $filter: Observable<Filter> = this._filter
        .asObservable()
        .pipe(
            skipWhile(filter => filter === null)
        );

    private _monthDays: BehaviorSubject<Moment[]> = new BehaviorSubject(null);
    $monthDays: Observable<Moment[]> = this._monthDays
        .asObservable()
        .pipe(
            skipWhile(monthDays => monthDays === null)
        );

    constructor() {
        this.$filter.subscribe(filter => {
            const currentMonthYear = moment()
                .month(filter.month - 1)
                .year(filter.year);

            const startDay = currentMonthYear.clone().startOf('month').startOf('week');
            const endDay = currentMonthYear.clone().endOf('month').endOf('week');
            
            let date = startDay.clone().subtract(1, 'day');
            let calendar = [];

            while (date.isBefore(endDay, 'day')) {
                calendar = calendar.concat(Array(7).fill(0).map(() => date.add(1, 'day').clone()));
            }

            this._monthDays.next(calendar);
        });

        const filter = new Filter(
            moment().month() + 1, 
            moment().year()
        );

        this._filter.next(filter);
    }

    setCurrentMonth(month: number) {
        let filter = this._filter.value;
        filter.month = month;

        this._filter.next(filter);
    }

    setCurrentYear(year: number) {
        let filter = this._filter.value;
        filter.year = year;

        this._filter.next(filter);
    }
}

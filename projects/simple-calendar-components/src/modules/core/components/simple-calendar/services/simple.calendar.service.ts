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
            const startWeek = moment()
                .month(filter.month)
                .year(filter.year)
                .startOf('month').week();

            const endWeek = moment()
                .month(filter.month)
                .year(filter.year)
                .endOf('month').week();

            const monthDays = Array(endWeek - startWeek + 1).fill(0).map((v, i) => startWeek + i)
                .reduce((acc, week) => {
                    let days = Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'));

                    return acc.concat(days);
                }, []);

            this._monthDays.next(monthDays);
        });

        const filter = new Filter(
            moment().month(), 
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

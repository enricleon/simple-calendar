import { Injectable } from '@angular/core';
import { Filter } from '../../../models/filter.model';

import * as moment_ from 'moment';
import { Moment } from 'moment';

const moment = moment_;

import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')

import { Observable, BehaviorSubject } from 'rxjs';
import { skipWhile, filter, map, combineLatest } from 'rxjs/operators';
import { WeatherService } from '../../../services/weather.service';
import { CalendarDay } from '../../../models/calendar-day';

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

    private _monthDays: BehaviorSubject<CalendarDay[]> = new BehaviorSubject(null);
    $monthDays: Observable<CalendarDay[]> = this._monthDays
        .asObservable()
        .pipe(
            skipWhile(monthDays => monthDays === null)
        );

    // This dependency shoult probably be elsewhere or inverted
    constructor(
        private _weatherService: WeatherService
    ) {
        this.$filter.subscribe(filter => {
            const currentMonthYear = moment()
                .month(filter.month - 1)
                .year(filter.year);

            const startDay = currentMonthYear.clone().startOf('month').startOf('week');
            const endDay = currentMonthYear.clone().endOf('month').endOf('week');
            
            let date = startDay.clone().subtract(1, 'day');
            let calendar = [];

            while (date.isBefore(endDay, 'day')) {
                calendar = calendar.concat(Array(7).fill(0).map(() => {
                    let day = new CalendarDay();
                    day.date = date.add(1, 'day').clone();

                    this.populateExtraInfo(day);

                    return day;
                }));
            }

            this._monthDays.next(calendar);
        });

        const nextFilter = new Filter(
            moment().month() + 1, 
            moment().year()
        );

        this._filter.next(nextFilter);
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

    // Probably should be done with some strategy pattern
    private populateExtraInfo(calendarUnit: CalendarDay) {
        var a = moment();
        var b = moment().add(5, 'days');

        if(calendarUnit.date.isBetween(a, b)) {
            // This method should retrieve all the info already mapped instead of mapping it here
            this._weatherService.getForecast('Barcelona').subscribe(forecast => {
                let forecastDay = forecast.list.filter(item => moment.unix(item.dt).isSame(calendarUnit.date, 'date'));
                
                calendarUnit.description = forecastDay[0].weather[0].description
                calendarUnit.temperature = forecastDay[0].main.temp;
            });
        };
    }
}

import * as moment_ from 'moment';
const moment = moment_;

import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')

import { Injectable } from '@angular/core';
import { Month } from '../models/month.model';

const startYear = 1975;

@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    private months: Array<Month>;
    private years: Array<Number>;
    private weekDays: Array<String>;

    constructor() {
        const currentYear = new Date().getFullYear();

        this.years = Array(currentYear - startYear + 1).fill(null).map((v, i) => {
            return startYear + i;
        });

        this.months = Array.apply(0, Array(12)).map((_, i) => {
            return {
                key: i,
                name: moment().month(i).format('MMM')
            }
        });

        this.weekDays = moment.weekdays(true);
    }

    getMonths() {
        return this.months;
    }

    getYears() {
        return this.years;
    }

    getWeekDays(): Array<String> {
        return this.weekDays;
    }
}

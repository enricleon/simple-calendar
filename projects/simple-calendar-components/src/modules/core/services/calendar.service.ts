import { Injectable } from '@angular/core';
import { Month } from '../models/month.model';

const startYear = 1975;

@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    private months: Array<Month>;
    private years: Array<Number>;

    constructor() {
        const currentYear = new Date().getFullYear();

        this.years = Array(currentYear - startYear + 1).fill(null).map((v, i) => {
            return startYear + i;
        });
        this.months = [
            {key: 1, name: 'January'},
            {key: 2, name: 'February'},
            {key: 3, name: 'March'},
            {key: 4, name: 'April'},
            {key: 5, name: 'May'},
            {key: 6, name: 'June'},
            {key: 7, name: 'July'},
            {key: 8, name: 'August'},
            {key: 9, name: 'September'},
            {key: 10, name: 'October'},
            {key: 11, name: 'November'},
            {key: 12, name: 'December'}
        ];
    }

    getMonths() {
        return this.months;
    }

    getYears() {
        return this.years;
    }
}

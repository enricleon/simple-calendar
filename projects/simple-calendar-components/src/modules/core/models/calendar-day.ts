import * as moment_ from 'moment';
import { Moment } from 'moment';

const moment = moment_;

export class CalendarDay {
    date: Moment;
    description: string;
    temperature: string;

    isToday() {
        var isCurrentDate = this.date.isSame(new Date(), "day");
        return isCurrentDate;
    }
}
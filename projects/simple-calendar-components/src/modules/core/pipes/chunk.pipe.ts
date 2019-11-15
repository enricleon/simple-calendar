import { Pipe, PipeTransform } from '@angular/core';
import { CalendarDay } from '../models/calendar-day';

@Pipe({
    name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

    transform(days: CalendarDay[], chunkSize) {
        return [].concat.apply([],
            days.map(function(elem, i) {
              return i % chunkSize ? [] : [days.slice(i, i + chunkSize)];
            })
        );
    }

}
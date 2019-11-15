import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

    transform(value: string, unit: string) {
        if(value !== null && value !== undefined) {
            let parsedValue =  parseFloat(value);

            if (parsedValue && !isNaN(parsedValue)) {

                if (unit === 'C') {
                    let tempareature = (parsedValue - 273.15);
                    return tempareature.toFixed(2);
                }
                if (unit === 'K') {
                    let tempareature = (parsedValue + 273.15);
                    return tempareature.toFixed(2);
                }
            }
        }
        return;
    }

}
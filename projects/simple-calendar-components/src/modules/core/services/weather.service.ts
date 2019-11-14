import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment_ from 'moment';
const moment = moment_;

import 'moment/locale/es'
moment.locale('es')

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private apiKey: string;
    private apiUrl: string;
    
    constructor(
        private http: HttpClient,
        @Optional()
        @Inject('config')
        config?
    ) {
        this.apiKey = config.openWeatherApiKey;
        this.apiUrl = config.openWeatherApiUrl;
    }

    getForecast(loc: string): any {
        return this.http.get(`${this.apiUrl}/forecast?q=${loc}&appid=${this.apiKey}`)
    }
}
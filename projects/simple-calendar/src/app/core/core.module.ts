/* Angular modules */
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialModule } from '../angular-material.module';
import { SimpleCalendarComponentsModule } from 'simple-calendar-components';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' }
        ]),
        FlexLayoutModule,
        AngularMaterialModule,
        SimpleCalendarComponentsModule.forRoot({
            openWeatherApiKey: 'd64ea9f580681f5735117b134dbe7057',
            openWeatherApiUrl: 'http://api.openweathermap.org/data/2.5'
        })
    ],
    declarations: [
        HomeComponent,
        NavigationBarComponent
    ],
    exports: [
        RouterModule,
        NavigationBarComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core: CoreModule) {
        if (core) {
            throw new Error('The CoreModule can not be imported twice');
        }
    }

    public static forRoot(config?): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ...config ? [{ provide: 'config', useValue: config }] : []
            ]
        };
    }
}

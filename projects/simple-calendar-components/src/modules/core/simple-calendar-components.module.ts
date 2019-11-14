import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';

import { SimpleCalendarComponent } from './components/simple-calendar/simple-calendar.component';
import { SimpleCalendarHeaderComponent } from './components/simple-calendar/components/simple-calendar-header/simple-calendar-header.component';
import { SimpleCalendarFilterComponent } from './components/simple-calendar/components/simple-calendar-filter/simple-calendar-filter.component';
import { SimpleCalendarMonthComponent } from './components/simple-calendar/components/simple-calendar-month/simple-calendar-month.component';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';

@NgModule({
    declarations: [
        SimpleCalendarComponent,    
        SimpleCalendarHeaderComponent,
        SimpleCalendarMonthComponent,
        SimpleCalendarFilterComponent,
        TemperatureConverterPipe
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        AngularMaterialModule
    ],
    exports: [SimpleCalendarComponent]
})
export class SimpleCalendarComponentsModule {
    constructor(@Optional() @SkipSelf() core: SimpleCalendarComponentsModule) {
        if (core) {
            throw new Error('The CoreModule can not be imported twice');
        }
    }

    public static forRoot(config?): ModuleWithProviders {
        return {
            ngModule: SimpleCalendarComponentsModule,
            providers: [
                ...config ? [{ provide: 'config', useValue: config }] : []
            ]
        };
    }
}

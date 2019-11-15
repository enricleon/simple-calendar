import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';

import { SimpleCalendarComponent } from './components/simple-calendar/simple-calendar.component';
import { FilterComponent } from './components/simple-calendar/components/filter/filter.component';
import { MonthComponent } from './components/simple-calendar/components/month/month.component';
import { MonthHeaderComponent } from './components/simple-calendar/components/month-header/month-header.component';
import { WeekComponent } from './components/simple-calendar/components/week/week.component';
import { DayComponent } from './components/simple-calendar/components/day/day.component';

import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';
import { ChunkPipe } from './pipes/chunk.pipe';

@NgModule({
    declarations: [
        SimpleCalendarComponent,    
        MonthHeaderComponent,
        FilterComponent,
        MonthComponent,
        WeekComponent,
        DayComponent,
        TemperatureConverterPipe,
        ChunkPipe
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';

import { SimpleCalendarComponent } from './components/simple-calendar/simple-calendar.component';
import { SimpleCalendarHeaderComponent } from './components/simple-calendar/components/simple-calendar-header/simple-calendar-header.component';
import { SimpleCalendarMonthComponent } from './components/simple-calendar/components/simple-calendar-month/simple-calendar-month.component';
import { SimpleCalendarFilterComponent } from './components/simple-calendar/components/simple-calendar-filter/simple-calendar-filter.component';

@NgModule({
    declarations: [
        SimpleCalendarComponent,    
        SimpleCalendarHeaderComponent,
        SimpleCalendarMonthComponent,
        SimpleCalendarFilterComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        AngularMaterialModule
    ],
    exports: [SimpleCalendarComponent]
})
export class SimpleCalendarComponentsModule { }

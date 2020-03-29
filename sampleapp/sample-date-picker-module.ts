import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MyDatePickerApp} from './sample-date-picker-app';

import {SampleDatePickerNormal} from './sample-date-picker-normal';
import {SampleDatePickerInline} from './sample-date-picker-inline';
import {SampleDatePickerAccessModifier} from './sample-date-picker-access-modifier';

import {MyDatePickerModule} from '../projects/mydatepicker/src/lib/mydatepicker.module';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, MyDatePickerModule],
    declarations: [MyDatePickerApp, SampleDatePickerNormal, SampleDatePickerInline, SampleDatePickerAccessModifier],
    bootstrap: [MyDatePickerApp]
})
export class SampleDatePickerModule { }
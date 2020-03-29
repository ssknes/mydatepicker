import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MyDatePicker } from "./mydatepicker.component";
import { FocusDirective } from "./directives/mydatepicker.focus.directive";

@NgModule({
  declarations: [MyDatePicker, FocusDirective],
  imports: [CommonModule, FormsModule],
  exports: [MyDatePicker, FocusDirective]
})
export class MyDatePickerModule { }

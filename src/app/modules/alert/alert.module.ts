import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AlertComponent  }   from './alert.component';



@NgModule({

    imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
    declarations: [ AlertComponent],
    exports: [ AlertComponent] 

})

export class AlertModule { }
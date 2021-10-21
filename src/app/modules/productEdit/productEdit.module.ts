import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ProductEditComponent  }   from './productEdit.component';
import {RouterModule} from '@angular/router';


@NgModule({

    imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,
					 RouterModule  ],
    declarations: [ ProductEditComponent],
    exports: [ ProductEditComponent] 

})

export class ProductEditModule { }
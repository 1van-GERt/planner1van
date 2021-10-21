import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ProductInfoComponent  }   from './productInfo.component';
import {RouterModule} from '@angular/router';


@NgModule({

    imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,
					 RouterModule  ],
    declarations: [ ProductInfoComponent],
    exports: [ ProductInfoComponent] 

})

export class ProductInfoModule { }
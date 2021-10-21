import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ProductsAlertContentComponent  }   from './productsAlertContent.component';
import {RouterModule} from '@angular/router';


@NgModule({

    imports: [  BrowserModule, 
					 FormsModule],
    declarations: [ ProductsAlertContentComponent],
    exports: [ ProductsAlertContentComponent] 

})

export class ProductsAlertContentModule { }
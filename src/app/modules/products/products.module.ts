import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ProductsComponent  }   from './products.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module'

@NgModule({

   imports: [  BrowserModule, 
				   FormsModule,
				   ReactiveFormsModule,
				   RouterModule,
				   SharedModule ],
   declarations: [ ProductsComponent],
   exports: [ ProductsComponent] 

})

export class ProductsModule { }
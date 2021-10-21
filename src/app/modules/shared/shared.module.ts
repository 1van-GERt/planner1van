import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DropDownMenuComponent } from './dropDownMenu/dropDownMenu.component';
import { FilterMenuComponent } from './filterMenu/filterMenu.component'
import { SortMenuComponent } from './sortMenu/sortMenu.component'



@NgModule({

   imports: [ BrowserModule, 
			   FormsModule,
			   ReactiveFormsModule 
	],
    declarations: [  DropDownMenuComponent,
						    FilterMenuComponent,
						    SortMenuComponent
    ],
    exports: [ DropDownMenuComponent ] 

})

export class SharedModule { }
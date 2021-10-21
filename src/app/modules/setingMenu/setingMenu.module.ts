import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SetingMenuComponent  }   from './setingMenu.component';
import {RouterModule} from '@angular/router';

@NgModule({

    imports:      [ BrowserModule, 
					    FormsModule,
					    ReactiveFormsModule,
					    RouterModule ],
    declarations: [ SetingMenuComponent],
    exports: [ SetingMenuComponent] 

})

export class SetingMenuModule { }
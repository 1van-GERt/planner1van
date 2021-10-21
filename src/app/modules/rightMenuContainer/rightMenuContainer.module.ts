import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RightMenuContainerComponent  }   from './rightMenuContainer.component';



@NgModule({

    imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
    declarations: [ RightMenuContainerComponent],
    exports: [ RightMenuContainerComponent] 

})

export class RightMenuContainerModule { }
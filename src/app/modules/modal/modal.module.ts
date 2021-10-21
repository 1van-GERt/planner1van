import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ModalService } from './service/modal.service';
import { ModalComponent } from '../modal/modal.component';
 import {Routes, RouterModule} from '@angular/router';


@NgModule({

    imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
    declarations: [ ModalComponent],
    exports: [ ModalComponent] 

})

export class ModalModule { }
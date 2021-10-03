import { Component,
         ComponentFactoryResolver, 
         ViewChild,
         ViewContainerRef } from '@angular/core';

import { ModalService } from './service/modal.service';
import { ModalComponent } from './components/modal/modal.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './service/alert.service';
import { UsersServise } from './service/users.service';

  
@Component({
    selector: 'home',
    templateUrl: 'app.html',
    styleUrls: ['app.css']
})

export class AppComponent {
    

    @ViewChild("modal", { read: ViewContainerRef }) modal:any;
    @ViewChild("alert", { read: ViewContainerRef }) alert:any; 


    constructor(
      private resolver: ComponentFactoryResolver,
      public modalService: ModalService,
      public alertService: AlertService,
      public usersServise: UsersServise
    ){}

    ngAfterViewInit(){
        this.modalService.logRefApp(this.modal);
        this.alertService.logRefApp(this.alert);
     }

}
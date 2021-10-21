import { Component,
         ComponentFactoryResolver, 
         ViewChild,
         ViewContainerRef } from '@angular/core';

import { ModalService } from './modules/modal/service/modal.service';
import { ModalComponent } from './modules/modal/modal.component';
import { AlertComponent } from './modules/alert/alert.component';
import { AlertService } from './modules/alert/service/alert.service';
import { UsersServise } from './service/users.service';
import { RightMenuService } from './modules/rightMenuContainer/service/rightMenu.service';
import { FilterMenuService } from './modules/shared/filterMenu/service/filterMenu.service';


  
@Component({
    selector: 'home',
    templateUrl: 'app.html',
    styleUrls: ['app.css']
})

export class AppComponent {
    

    @ViewChild("modal", { read: ViewContainerRef }) modal:any;
    @ViewChild("alert", { read: ViewContainerRef }) alert:any; 
    @ViewChild("rightMenu", { read: ViewContainerRef }) rightMenu:any; 

    constructor(
      private resolver: ComponentFactoryResolver,
      public modalService: ModalService,
      public alertService: AlertService,
      public usersServise: UsersServise,
      public rightMenuService: RightMenuService,
      public filterMenuService: FilterMenuService,
    ){}

    ngAfterViewInit(){
        this.modalService.logRefApp(this.modal);
        this.alertService.logRefApp(this.alert);
        this.rightMenuService.logRefApp(this.rightMenu);
     }

}
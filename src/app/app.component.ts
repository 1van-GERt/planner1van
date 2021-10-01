import { Component,
         ComponentFactory,
         ComponentRef,
         ComponentFactoryResolver, 
         ViewChild, 
         ElementRef,
         TemplateRef,
         ViewContainerRef } from '@angular/core';

import { ModalService } from './service/modal.service';
import { ModalComponent } from './components/modal/modal.component';
import { AlertComponent } from './components/alert/alert.component';
import { ModalContent } from './models/modalContent.model';

import { AlertService } from './service/alert.service';


  
@Component({
    selector: 'home',
    templateUrl: 'app.html'
})

export class AppComponent {

        @ViewChild('test', {read: ViewContainerRef}) container!:ElementRef;

         loadComponent(){     
        const factory = this.componentFactory.resolveComponentFactory(ModalComponent);

        console.log(this.container)
         }




    public testText: string = 'test App';
     @ViewChild('modal', {read: ViewContainerRef}) modal!: ViewContainerRef;
    @ViewChild(AlertService, {read: ViewContainerRef}) alert!: AlertService;

    constructor(
        private componentFactory: ComponentFactoryResolver,
        public viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        public modalService: ModalService,
        public alertService: AlertService
    ) { }

    ngOnInit(){
        this.loadComponent();
        this.modalService.logRefApp(this.viewContainerRef, this.componentFactoryResolver)
        this.alertService.logRefApp(this.viewContainerRef, this.componentFactoryResolver)
    }

}
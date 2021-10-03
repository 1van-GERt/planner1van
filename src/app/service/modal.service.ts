import { Injectable, Component, NgModule,Input,ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalContent } from '../models/modalContent.model';  
import { ProductInfoComponent } from '../components/productInfo/productInfo.component'; 
import { AppComponent }   from './../app.component';
import { ModalComponent } from '../components/modal/modal.component';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})

export class ModalService{
  public modalTitle!: string;
  public modalBody!: string;
  public modalBtnYes!: string;
  public modalBtnYesFunction!: any;
  public modalBtnNo!: string;

  public modalContent!: ModalContent;
  public product: any;

  public refApp: any;
  public factoryApp: any;
  public onModalClose: Subject<any> = new Subject();
  public componentRef: any;

  constructor(public componentFactoryResolver: ComponentFactoryResolver ){}

  
  
  logRefApp(ref:any){
    this.refApp = ref;
  }



  showModal(modalContent: ModalContent, product: Product){
    this.modalContent = modalContent;
    this.product = product;
    const modalComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    this. componentRef = this.refApp.createComponent(modalComponentFactory); 

  }

  removeModal(isCloseModal: boolean):void{
    this.onModalClose.next(isCloseModal);
    this.refApp.remove();
  }

  closeModal(): void {
    this.refApp.remove();
  }
}
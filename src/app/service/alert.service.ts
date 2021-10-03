import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { AlertComponent } from '../components/alert/alert.component'
import { AlertContent } from '../models/alertContent.model'; 
import {Subject, timer } from 'rxjs';
import { ProductsAlertContent } from '../components/products/productsAlertContent/productsAlertContent.component'



@Injectable({
	providedIn: 'root'
})


export class AlertService{
	public refApp: any; 
	public factoryApp: any;
	public onAlertClose: Subject<any> = new Subject();
	public numbers = timer(5000);
  public numbersTest = timer(1);

  public refAlert: any;
  public refAlertContainer: any; 

  public alertContentKey: number = 0; 
  public alertItem: string = '';


  constructor(
    public componentFactoryResolver: ComponentFactoryResolver
   ){}



  logRefApp(ref:any){
		this.refApp = ref;
	}

  logRefAlert(ref:any){
	  this.refAlert = ref;
  }


	showAlert(alertContentKey: number,alertItem: string){
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const alertComponentRef = this.refApp.createComponent(alertComponentFactory);
    this.numbers.subscribe(x => { this.removeAlert(true); clearInterval });
    this.numbersTest.subscribe(x => { this.showAlertContent(alertContentKey, alertItem); clearInterval });   
	}

  showAlertContent(alertContentKey: number, alertItem: string){
    this.alertContentKey = alertContentKey;
    this.alertItem = alertItem;
    const alertContainerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ProductsAlertContent);
    const alertContainerComponentRef = this.refAlert.createComponent(alertContainerComponentFactory);  

  }

  removeAlert(isCloseAlert: boolean):void{
    this.onAlertClose.next(isCloseAlert);
    this.refApp.remove();
  }	
}
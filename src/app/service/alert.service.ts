import { Injectable } from '@angular/core';
import { AlertComponent } from '../components/alert/alert.component'
import { AlertContent } from '../models/alertContent.model'; 
import {Subject, timer } from 'rxjs';
import { AlertAddDelComponent } from '../components/products/alertAddDel/alertAddDel.component'




@Injectable({
	providedIn: 'root'
})


export class AlertService{
	public alertTitle!: string;
	public alertBody!: string;

/*	public alertContent!: AlertContent;*/

	public refApp: any; 
	public factoryApp: any;
	public onAlertClose: Subject<any> = new Subject();
	public numbers = timer(5000);

  public refAlert: any;
  public factoryAlert: any;  

    public alertContent = new AlertContent( 
        '',
        '',
        'Close'
    );

	logRefApp(ref:any, factory:any){
		this.refApp = ref;
		this.factoryApp = factory;
	}

   logRefAlert(ref:any, factory:any){
		this.refAlert = ref;
    this.factoryAlert = factory;
   }

	ngOnInit(){
		
	}



	showAlertTest(text1:string, text2:string,text3:string){
        this.alertContent.alertTitle = text1;
        this.alertContent.alertBody = text2+text3;
    const componentFactory = this.factoryApp.resolveComponentFactory(AlertComponent);
    const componentRef = this.refApp.createComponent(componentFactory);
    const componentFactoryTest = this.factoryAlert.resolveComponentFactory(AlertAddDelComponent);
    const componentRefTest = this.refAlert.createComponent(componentFactoryTest);     
    this.numbers.subscribe(x => { this.removeAlert(true); clearInterval });
	}

  removeAlert(isCloseAlert: boolean):void{
    this.onAlertClose.next(isCloseAlert);
    this.refApp.remove();
  }	
}
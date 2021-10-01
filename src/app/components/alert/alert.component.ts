import { Component,
         ComponentFactoryResolver,			
         ViewChild, 
         ViewContainerRef 
			 } from '@angular/core';
import { SetingMenuService } from '../../service/setingMenu.service'
import { timer } from 'rxjs';
import { AlertService } from'../../service/alert.service';
import { AlertContent } from '../../models/alertContent.model';
import { AlertAddDelComponent }   from '../products/alertAddDel/alertAddDel.component';





@Component({
    selector: 'alert',
    templateUrl: 'alert.html',
    styleUrls: ['alert.css']
})

export class AlertComponent{

	public alertTitle!: string;
	public alertBody!: string;
	public alertBtnClose!: string;
	public alertContent!: AlertContent;
	public alertColor!: any;
	public finalAlertPosition!: any;

	@ViewChild(AlertAddDelComponent, {read: ViewContainerRef}) alertAddDel!: AlertAddDelComponent;


	constructor(
      public viewContainerRef: ViewContainerRef,
      public componentFactoryResolver: ComponentFactoryResolver,
		public alertService: AlertService,
		public setingMenuService: SetingMenuService
	){}

	ngOnInit():void{
		 console.log(this.componentFactoryResolver)
		this.alertContent = this.alertService.alertContent;
		this.alertTitle = this.alertContent.alertTitle;
		this.alertBody = this.alertContent.alertBody;
		this.alertBtnClose = this.alertContent.alertBtnClose;
		this.alertColor = this.setingMenuService.alertColor;
		this.finalAlertPosition = this.setingMenuService.finalAlertPosition;

		this.alertService.logRefAlert(this.viewContainerRef, this.componentFactoryResolver)
	}

	clickBtnClose(): void{

     this.alertService.removeAlert(true);
   }
}
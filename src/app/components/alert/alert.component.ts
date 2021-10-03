import { Component,
         ComponentFactoryResolver,			
         ViewChild, 
         ViewContainerRef 
			 } from '@angular/core';
import { SetingMenuService } from '../../service/setingMenu.service'
import { timer } from 'rxjs';
import { AlertService } from'../../service/alert.service';
import { AlertContent } from '../../models/alertContent.model';





@Component({
    selector: 'alert',
    templateUrl: 'alert.html',
    styleUrls: ['alert.css']
})

export class AlertComponent{

	public alertColor!: any;
	public finalAlertPosition!: any;

	@ViewChild("alertContainer", { read: ViewContainerRef }) alertContainer:any;


	constructor(
      public viewContainerRef: ViewContainerRef,
      public componentFactoryResolver: ComponentFactoryResolver,
		public alertService: AlertService,
		public setingMenuService: SetingMenuService
	){}

   ngAfterViewInit(){
      this.alertService.logRefAlert(this.alertContainer)
     }

	ngOnInit():void{
		this.alertColor = this.setingMenuService.alertColor;
		this.finalAlertPosition = this.setingMenuService.finalAlertPosition;
	}

	clickBtnClose(): void{

     this.alertService.removeAlert(true);
   }
}
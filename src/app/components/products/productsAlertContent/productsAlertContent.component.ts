import { Component } from '@angular/core';
import { AlertService } from '../../../service/alert.service';
import { AlertContent } from '../../../models/alertContent.model';


@Component({
    selector: 'productsAlertContent',
    templateUrl: 'productsAlertContent.html',
    styleUrls: ['productsAlertContent.css']

})

export class ProductsAlertContent{

	public AlertContent!: AlertContent;

	public alertTitle: any = 'test';
	public alertBody!: string;
	public alertItem!: string;

	public alertContentKey!: number;

	public ArrAlertContent: AlertContent[] =
	[
		{ alertId: 0, alertTitle: 'TitleTest', alertBody: 'BodyTest'},
		{ alertId: 1, alertTitle: 'Успешно', alertBody: 'добавлен(а) в спискок продуктов'},
		{ alertId: 2, alertTitle: 'Успешно', alertBody: 'удален из списка продуктов'},
		{ alertId: 3, alertTitle: 'Успешно', alertBody: 'Все купленные товары удалены из списка покупок'},


	];
	constructor(
		public alertService: AlertService,
	){}

	ngOnInit(){		
		this.alertContentKey = this.alertService.alertContentKey;
		this.alertItem = this.alertService.alertItem;
		this.alertTitle = this.ArrAlertContent[this.alertContentKey].alertTitle;
		this.alertBody = this.ArrAlertContent[this.alertContentKey].alertBody;
		this.alertItem = this.alertItem;
	}
  
}
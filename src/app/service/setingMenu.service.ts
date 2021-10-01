import { Injectable } from '@angular/core';
import { SetingMenu } from '../models/setingMenu.model'

@Injectable({
	providedIn: 'root'
})

export class SetingMenuService{
	public alertColor: string = 'blue';
	public alertPosition!: string;
	public finalAlertPosition: any = 'top: 10px; right: 10px';
/*	public positionLeft: any = 'left:50%';*/
	public setingMenu!: SetingMenu;

	public positionOptions: any[] = [
		{ id:1, finalAlertPosition:'top: 10px; right: 10px'},
		{ id:2, finalAlertPosition:'bot: 10px; right: 10px'},
		{ id:3, finalAlertPosition:'bot: 10px; left: 10px'},
		{ id:4, finalAlertPosition:'top: 10px; left: 10px'},
	];	

	saveSetingMenu(setingMenuForm: SetingMenu){
		this.alertColor = setingMenuForm.alertColor;
		this.alertPosition = setingMenuForm.alertPosition;
		let result = this.positionOptions.find(item => item.id == this.alertPosition)
		this.finalAlertPosition = result.finalAlertPosition;
		console.log(this.finalAlertPosition)
	}

}
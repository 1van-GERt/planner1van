import { Injectable } from '@angular/core';
import { SetingMenu } from '../models/setingMenu.model'

@Injectable({
	providedIn: 'root'
})

export class SetingMenuService{
	public alertColor: string = 'blue';
	public alertPosition: string = '1';
	public finalAlertPosition: string = 'top: 10px; right: 10px';
	public setingMenu!: SetingMenu;

	public positionOptions: any[] = [
		{ id:1, finalAlertPosition:'top: 10px; right: 10px'},
		{ id:2, finalAlertPosition:'bottom: 10px; right: 10px'},
		{ id:3, finalAlertPosition:'bottom: 10px; left: 10px'},
		{ id:4, finalAlertPosition:'top: 10px; left: 10px'},
	];	

	saveSetingMenu(setingMenuForm: SetingMenu){
		this.alertColor = setingMenuForm.alertColor;
		this.alertPosition = setingMenuForm.alertPosition;
		let result = this.positionOptions.find(item => item.id == this.alertPosition)
		this.finalAlertPosition = result.finalAlertPosition;
	}

}
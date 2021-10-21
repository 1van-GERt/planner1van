import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsersServise } from '../../service/users.service';
import { SetingMenu } from './models/setingMenu.model';
import { SetingMenuService } from './service/setingMenu.service';
import { AlertService } from '../alert/service/alert.service';

@Component({
	selector: 'setingMenu',
	templateUrl: 'setingMenu.html',
	styleUrls: ['setingMenu.css']
})


export class SetingMenuComponent {

	constructor(
		public usersServise: UsersServise,
		public setingMenuService: SetingMenuService,
      public alertService: AlertService		
	){}


	public setingMenu!: SetingMenu;
	public colorAlert!: string;

	userForm : FormGroup = new FormGroup({

		'userName': new FormControl('user', Validators.required),
		'userEmail': new FormControl("", [
	                Validators.required, 
	                Validators.email
	    ]),
		'userPhohe': new FormControl("", Validators.pattern("[0-9]{10}"))
	});

	addUser(){
		this.usersServise.addUser(this.userForm.value);
		this.userForm.reset()
	}

	setingMenuForm : FormGroup = new FormGroup({

		'alertColor': new FormControl(this.setingMenuService.alertColor, Validators.required),
		'alertPosition': new FormControl(this.setingMenuService.alertPosition, Validators.required),
		})

	saveSetingForm(){
		this.setingMenuService.saveSetingMenu(this.setingMenuForm.value);
	}	
    showAlert(){
        /*this.alertService.showAlertTest(text1, text2, text3)*/
    }	
}

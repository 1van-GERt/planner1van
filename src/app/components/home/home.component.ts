import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsersServise } from '../../service/users.service'


@Component({
	selector: 'home',
	templateUrl: 'home.html',

})

export class HomeComponent { 
	public userName!: string;

   constructor(
      public usersServise: UsersServise,
   ){}

   ngOnInit(){
       this.userName = this.usersServise.users[0].userName;
       console.log(this.userName)
   }

}
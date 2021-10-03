import { IUser } from '../models/user.interface';
import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class UsersServise{

	public id: number = 1;
	
	public users: IUser[] = 
		[ 
			{
				id: 0, userName: "GERt", userEmail: "email",	userPhone: 1234567890,
			}
		];


	addUser(user: any){
			this.id+=1;
			this.users.push({ id: this.id, ...user })
			console.log('UsersServise', this.users);

	}
}
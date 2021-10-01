export class User {
	public id!: number;
	public login!: string;
	public password!: any;
	public firstname! :string;
	public name!: string;
	public age!: number;

	constructor(login: any, password: any, firstname: string, name: string, age: number){
		this.id =1;
		this.login = login;
		this.password = password;
		this.firstname = firstname;
		this.name = name;
		this.age = age;

	}
}
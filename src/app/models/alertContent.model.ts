export class AlertContent{
	public alertTitle!: string;
	public alertBody!: string;
	public alertBtnClose: string = 'Close';

	constructor(
		alertTitle: string,
		alertBody: string,
		alertBtnClose: string
	){
		this.alertTitle = alertTitle;
		this.alertBody = alertBody;
		this.alertBtnClose = alertBtnClose;
	}
}
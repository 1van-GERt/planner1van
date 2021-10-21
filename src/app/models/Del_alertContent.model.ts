export class AlertContent{
	public alertId!: number;
	public alertTitle!: string;
	public alertBody!: string

	constructor(
		alertId: number,
		alertTitle: string,
		alertBody: string
	){
		this.alertId = alertId;
		this.alertTitle = alertTitle;
		this.alertBody = alertBody;
	}
}
export class DropDownMenuItem{
	public dropDownMenuBtn!: string;
	public dropDownMenuFun!: any;


	constructor(
		dropDownMenuBtn: string,
		dropDownMenuFun: any
	){
		this.dropDownMenuBtn = dropDownMenuBtn;
		this.dropDownMenuFun = dropDownMenuFun;
	}
}
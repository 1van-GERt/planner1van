
export class ModalContent{
	public modalTitle!: string;
	public modalBody!: string;
	public modalBtnYes!: string;
	public modalBtnNo!: string;
	public isOpen!: boolean;


	constructor(
		modalTitle: string, 
		modalBody: string, 
		modalBtnYes: string,
		modalBtnNo: string
		){
			this.modalTitle = modalTitle;
			this.modalBody = modalBody;
			this.modalBtnYes = modalBtnYes;
			this.modalBtnNo = modalBtnNo;
	}

}
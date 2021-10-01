import { Component } from '@angular/core';

import { ModalService } from '../../service/modal.service';
import { AppComponent } from '../../app.component';
import { ModalContent } from '../../models/modalContent.model';  
import { ProductInfoComponent } from '../productInfo/productInfo.component';
import { Product } from '../../models/product.model';
import { AlertService } from '../../service/alert.service';



@Component({
	selector: 'modal',
	templateUrl: 'modal.html',
	styleUrls: ['modal.css']
})

export class ModalComponent{

  public modalTitle!: string;
  public modalBody!: string;
  public modalBtnYes!: string;
  public modalBtnYesFunction!: any;
  public modalBtnNo!: string;
  public modalContent!: ModalContent;	
  public product!: any;
  private Products!: Product[];

	constructor(
        public modalService: ModalService,
        public alertService: AlertService

    ) { }

   removeModal(){
     this.modalService.closeModal();
   }

  

   ngOnInit():void{
     this.modalContent = this.modalService.modalContent;
     this.modalTitle = this.modalContent.modalTitle;
     this.modalBody = this.modalContent.modalBody;
     this.modalBtnYes = this.modalContent.modalBtnYes;
     this.modalBtnNo = this.modalContent.modalBtnNo;
   }

    clickBtnYes(){
     this.modalService.removeModal(true); 
   }

    showAlert(text1:string, text2:string,text3:string){
        this.alertService.showAlertTest(text1, text2, text3)
    }


}
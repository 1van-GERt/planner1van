import { Injectable } from '@angular/core';
import { ProductsService } from '../../../products/service/Products.service'
import { FormGroup } from '@angular/forms';



@Injectable({
	providedIn: 'root'
})

export class FilterMenuService{

	public filterActive: boolean = false;
	public filterProducts!: any;


	showFilterMenu(filterMenuForm: FormGroup, data:any){
		this.filterActive = true
				console.log(this.filterActive)
		this.filterProducts = data.filter((item: any) => item[filterMenuForm.value.filterOptions].toString().toLowerCase().substr(0,filterMenuForm.value.filterValue.length) == filterMenuForm.value.filterValue.toLowerCase())
		console.log(this.filterProducts.length)
	}

	cancelFilter(){
		this.filterActive = false;
	}


}
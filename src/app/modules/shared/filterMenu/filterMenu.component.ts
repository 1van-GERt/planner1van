import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { FilterMenuService } from './service/filterMenu.service'
import { ProductsService } from '../../products/service/Products.service'


@Component({
	selector: 'filterMenu',
	templateUrl: 'filterMenu.html',
	styleUrls: ['filterMenu.css']
})

export class FilterMenuComponent{

	public key!: string;
	public testI: number = 2;

	constructor(
		public filterMenuService: FilterMenuService,
		public productsService: ProductsService,
		public fb: FormBuilder		
	){}
	
	public filterMenuForm : FormGroup = new FormGroup({
		'filterOptions': new FormControl('id',Validators.required),
		'filterValue': new FormControl('',Validators.required),
	});

	public formTest = this.fb.group({
		'control1': new FormControl(

		{
			filterOptions:'id',
			filterValue:'первый'
		},
			Validators.required)
	})

/*	public testFormArray = this.fb.array([
		this.fb.group({
			'filterOptions': new FormControl('id',Validators.required),
      	'filterValue':  new FormControl('',Validators.required),
		})
	])*/


	showFilterMenu(){		
		this.filterMenuService.showFilterMenu(this.filterMenuForm, this.productsService.Products)
	}

	ngDoCheck(){
		this.key = this.filterMenuForm.value.filterOptions;
	}

	clearFilterValue(){
		this.filterMenuForm.controls.filterValue.setValue('')
	}

	cancelFilter(){
		this.filterMenuService.cancelFilter();
	}

	addControltest(){
		this.formTest.addControl('control'+this.testI, new FormControl({filterOptions:'id',filterValue:'222'},Validators.required))
		console.log(this.formTest.value);
		this.testI++;
	}

}
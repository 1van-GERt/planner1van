import { Component } from '@angular/core';
import { ProductsComponent } from '../../products/products.component'
import { NgModule }      from '@angular/core';
import { Product } from '../../products/models/product.model';
import { DropDownMenuItem } from './models/dropDownMenuItem.model'
import { RightMenuService } from '../../rightMenuContainer/service/rightMenu.service'

import { FilterMenuComponent } from '../filterMenu/filterMenu.component'
import { SortMenuComponent } from '../sortMenu/sortMenu.component'

@Component({
	selector: 'dropDownMenu',
	templateUrl: 'dropDownMenu.html',
	styleUrls: ['dropDownMenu.css']
})

export class  DropDownMenuComponent{
  public DropDownMenuItem!: DropDownMenuItem;
	public btnDropDownMenuShow:boolean = false;



  public DropDownMenuItems: DropDownMenuItem[] = [
     {
       dropDownMenuBtn:'Фильтровать',
       dropDownMenuFun: () => { this.FilterFromDropDown() }
     },
     {
       dropDownMenuBtn:'Cортировать',
       dropDownMenuFun:() => { this.SortFromDropDown() }
     }

  ]


  constructor(
    public rightMenuService:RightMenuService,
  ){}




   showDropDownMenu(){
   	 this.btnDropDownMenuShow = (this.btnDropDownMenuShow == true) ? false : true;
   }

   FilterFromDropDown(){
     this.rightMenuService.showRightMenu(FilterMenuComponent)
     this.btnDropDownMenuShow = false;
   }

  SortFromDropDown(){
    this.rightMenuService.showRightMenu(SortMenuComponent)

    this.btnDropDownMenuShow = false;
 }
}
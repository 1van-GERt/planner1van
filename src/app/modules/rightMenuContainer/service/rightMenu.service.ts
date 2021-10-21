import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { RightMenuContainerComponent } from '../rightMenuContainer.component'
import { FilterMenuComponent } from '../../shared/filterMenu/filterMenu.component'
import { SortMenuComponent } from '../../shared/sortMenu/sortMenu.component'

import { timer } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class RightMenuService{

	public refApp: any; 
	public refRightMenuConteiner!:any;

   public numbersTest = timer(1);

   constructor(
   	public componentFactoryResolver: ComponentFactoryResolver
   ){}

   logRefApp(ref:any){
		this.refApp = ref;

	}

	showRightMenu(component:any){
		this.refApp.clear()
	   const rightMenuComponentFactory = this.componentFactoryResolver.resolveComponentFactory(RightMenuContainerComponent);
   	const rightMenuComponentRef = this.refApp.createComponent(rightMenuComponentFactory);

   	 this.numbersTest.subscribe(x => { this.showContent(component); clearInterval }); 


	}

	showContent(component:any){
		const rightMenuFactory = this.componentFactoryResolver.resolveComponentFactory(component);
   	const componentRef = this.refRightMenuConteiner.createComponent(rightMenuFactory); 
	}

	RightMenuContainerClose(){
		this.refApp.clear()
	}

}









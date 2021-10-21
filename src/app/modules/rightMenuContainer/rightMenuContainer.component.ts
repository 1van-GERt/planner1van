import { Component,
         ComponentFactoryResolver, 
         ViewChild,
         ViewContainerRef } from '@angular/core';
import { RightMenuService } from './service/rightMenu.service'


@Component({
    selector: 'rightMenuContainer',
    templateUrl: 'rightMenuContainer.html',
    styleUrls: ['rightMenuContainer.css']
})

export class RightMenuContainerComponent{

	public RightMenuContainerRef!:string

  @ViewChild("rightMenuConteiner", { read: ViewContainerRef }) rightMenuConteiner:any;


  constructor(
    public rightMenuService:RightMenuService,
    public componentFactoryResolver: ComponentFactoryResolver 
  ){}




  ngAfterViewInit(){
    this.rightMenuService.refRightMenuConteiner = this.rightMenuConteiner;
  }




  RightMenuContainerClose(){
   
    this.rightMenuService. RightMenuContainerClose();
  }
}
import { Component,
         ComponentFactory,
         ComponentRef,
         ComponentFactoryResolver, 
         ViewChild, 
         ElementRef,  
         ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/Products.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { ProductInfoResources } from '../productInfo/productInfo.resources';
import { Router } from '@angular/router';
import { ModalComponent  } from '../modal/modal.component';
import { ModalService } from '../../service/modal.service';
import { AppComponent } from '../../app.component';
import { ModalContent } from '../../models/modalContent.model';
import { NgModuleRef }      from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
    selector: 'product',
    templateUrl: 'productInfo.html'
})

export class ProductInfoComponent { 
     
    public id!: number;
    public price!: number;
    public amount!: number;
    public product!: any;
    public productInfoResources: ProductInfoResources = new ProductInfoResources();
    public Products!: Product[];
    private subscriptions: Subscription = new Subscription();

    
    public modalContent = new ModalContent( 
        'Удаление продукта', 
        'Вы уврены что хотите удалить?',
        'Да',
        'Нет'
    );

    

    constructor(
        private activateRoute: ActivatedRoute,
        public productsService: ProductsService,
        public modalService: ModalService,
        private router: Router,

    ){}

    ngOnInit(){
        this.Products = this.productsService.Products;
        this.subscriptions.add(this.activateRoute.params.subscribe(params=>this.id=params['id']));
        this.product = this.productsService.InfoProduct(this.id);
    }



    showModal(modalContent: ModalContent){
        this.modalService.showModal(this.modalContent, this.product);
        this.modalService.onModalClose.pipe(take(1)).subscribe(value => {
            if(value) {
                this.delProduct();
            }
        });
   }

    delProduct(){
        this.Products = this.productsService.DelProduct(this.product, this.Products);
        this.router.navigate(['products'])

    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
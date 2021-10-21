import { Component,
         ComponentFactory,
         ComponentRef,
         ComponentFactoryResolver, 
         ViewChild, 
         ElementRef,  
         ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/service/Products.service';
import { Product } from '../products/models/product.model';
import { Subscription } from 'rxjs';
import { ProductEditResources } from './productEdit.resources';
import { Router } from '@angular/router';
import { ModalComponent  } from '../modal/modal.component';
import { ModalService } from '../modal/service/modal.service';
import { AppComponent } from '../../app.component';
import { ModalContent } from '../products/models/modalContent.model';
import { NgModuleRef }      from '@angular/core';
import { take } from 'rxjs/operators';


@Component({
    selector: 'product',
    templateUrl: 'productEdit.html'
})

export class ProductEditComponent { 
     
    public id!: number;
    public price!: number;
    public amount!: number;
    public product!: any;
    public productEditResources: ProductEditResources = new ProductEditResources();
    public Products!: Product[];
    private subscriptions: Subscription = new Subscription();

    public purchaseEdit!: string;
    public priceEdit!: number;
    public amountEdit!: number;

    
    public modalContent = new ModalContent( 
        'Сохранение изменений', 
        'Вы уврены, что хотите сохранить изменения?',
        'Да',
        'Нет'
        );

    

    constructor(
        private activateRoute: ActivatedRoute,
        public productsService: ProductsService,
        public modalService: ModalService,
        private router: Router

    ){}

    ngOnInit(){
        this.Products = this.productsService.Products;
        this.subscriptions.add(this.activateRoute.params.subscribe(params=>this.id=params['id']));
        this.product = this.productsService.InfoProduct(this.id);
        console.log(this.product)
        this.purchaseEdit = this.product.purchase;
        this.priceEdit = this.product.price;
        this.amountEdit = this.product.amount;
    }



    showModal(modalContent: ModalContent){
        this.modalService.showModal(this.modalContent, this.product);
        this.modalService.onModalClose.pipe(take(1)).subscribe(value => {
            if(value) {             
               this.productsService.editProduct(this.id, this.purchaseEdit)
               this.router.navigate(['products/info/'+this.id])
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
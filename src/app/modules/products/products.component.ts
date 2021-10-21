import { Component,
         ComponentFactoryResolver, 
         ViewChild,
         ViewContainerRef  } from '@angular/core';
import {ProductsService} from './service/Products.service';
import { Product } from './models/product.model';
import { ProductsResources } from '../products/products.resources';
import {ProductInfoComponent} from '../productInfo/productInfo.component';
import { ModalComponent  } from '../modal/modal.component';
import { ModalService } from '../modal/service/modal.service';
import { ModalContent } from './models/modalContent.model';
import { take } from 'rxjs/operators';

import { AlertService } from '../alert/service/alert.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Purchase10Pipe } from '../../productPurchase.pipe'
import { DropDownMenuComponent } from '../shared/dropDownMenu/dropDownMenu.component';
import { FilterMenuService } from '../shared/filterMenu/service/filterMenu.service'

@Component({
    selector: 'products',
    templateUrl: 'products.html',
    styleUrls: ['products.css']
})


export class ProductsComponent {
    public productId: number = 4;      
    public sumPrice: number = 1; 
    public totalPrice: number = 0;
    public Products!: Product[];
    public productsResources: ProductsResources = new ProductsResources();
    public id!: number;
    public product: any;
    public testName!: string;

    public productsPerPage: any =3;
    public resulProducts!: Product[];
    public page: number = 1;
    public isActive: boolean = false;
    public btnSoctActive: boolean = false;

    public filterActive: boolean = false;

    public testObj!: any;
    public pageNumbers!: any;

    @ViewChild("dropDownMenu", { read: ViewContainerRef }) dropDownMenu:any; 


    productAddForm : FormGroup = new FormGroup({

    'productName': new FormControl('', Validators.required),
    'productPrice': new FormControl('',  Validators.required),
    })

/*    get pageNumbers(): number[] {
        if(this.filterActive == false){ this.testObj =  this.Products.length} else{  this.testObj = this.filterMenuService.filterProducts }

        let result = Array(Math.ceil(this.testObj / this.productsPerPage))
                .fill(0).map((x, i) => i + 1);
                console.log(result)
        if(result.length <= 5){
            return result; 
        }else{
            if(this.page < 3){
                return result = [1,2,3, -1, (result.length - 1),(result.length)];
            }else{
                if(this.page >= 3 && this.page <= (result.length - 2)){
                    return result = [1, -1, (this.page-1), this.page, (this.page + 1), -1, result.length]
                }else{
                    return result = [1,  2, -1, (result.length - 2), (result.length - 1), (result.length)]
                }
            }           
        }         
    }*/

    getPageNumbers(){
        if(this.filterActive == false){ this.testObj =  this.Products.length} else{  this.testObj = this.filterMenuService.filterProducts.length }

        if (this.testObj == 0){
            this.testObj++;
/*            ___________________ВСТАВИТЬ АЛЕРТ "НЕТ СОВПОДЕНИЙ ФИЛЬТРАЦИИ"_____________________*/
            }

        let result = Array(Math.ceil(this.testObj / this.productsPerPage))
                .fill(0).map((x, i) => i + 1);



        if(result.length <= 5){
            this.pageNumbers = result; 
        }else{
            if(this.page < 3){
                this.pageNumbers = [1,2,3, -1, (result.length - 1),(result.length)];
            }else{
                if(this.page >= 3 && this.page <= (result.length - 2)){
                    this.pageNumbers = [1, -1, (this.page-1), this.page, (this.page + 1), -1, result.length]
                }else{
                    this.pageNumbers = [1,  2, -1, (result.length - 2), (result.length - 1), (result.length)]
                }
            }           
        }         
    }

    public modalContent = new ModalContent( 
            'Удаление продукта', 
            'Вы уврены что хотите удалить?',
            'Да',
            'Нет'
        );

    
   constructor(
       private productsService: ProductsService,
       public modalService: ModalService,
       public alertService: AlertService,
       public filterMenuService: FilterMenuService,
    ){};

    

    ngOnInit(){
        this.Products = this.productsService.Products;
    }


    addProduct(){
        this.Products = this.productsService.addProduct(this.productAddForm);
        this.productAddForm.reset()
    }


    showProduct(){
        if(this.filterActive !== false){
            this.resulProducts = this.filterMenuService.filterProducts.slice(
                ((this.page - 1) * this.productsPerPage),(this.page * this.productsPerPage))
             if( this.resulProducts.length == 0 && this.page > 1)
                this.page--;
        }
            else{
            this.resulProducts = this.Products.slice(
                ((this.page - 1) * this.productsPerPage),(this.page * this.productsPerPage))

                if( this.resulProducts.length == 0 && this.page > 1)
                this.page--;
            }
    }

    delProduct(product:any){
        this.Products = this.productsService.DelProduct(product, this.Products);
        if(this.resulProducts.length == 1 && this.page > 1){
            this.page--;
        }

    }

    DelAllProducts(products: Product[]) {
        this.Products = this.productsService.DelAllProduct(products);

    }

    showModal(product: Product, modalContent: ModalContent){
        this.modalContent.modalBody = 'Вы уврены что хотите удалить "' + product.purchase + '" ?';

        this.modalService.showModal(this.modalContent, this.product);
        this.modalService.onModalClose.pipe(take(1)).subscribe(value => {
            if(value) {
                this.delProduct(product);
            }
        });
   }

    ngAfterContentChecked(products: Product[]){
        this.totalPrice = this.productsService.CalcTotalPrice(products); 
        this.filterActive = this.filterMenuService.filterActive;
        this.showProduct();
        this.getPageNumbers()

    }


    findPage(page:any){
        this.page = page;      
    }

    disableBtnBackPage(pageNumber: number){
        return pageNumber === 1 ? 'true' : ''
    }

    disableBtnNextPage(pageNumber: number, pageNumbers: number[]){
        return pageNumber == ((pageNumbers[pageNumbers.length - 1] ) || pageNumbers.length == 0) ? 'true' : '';
    }

    isActiveButton(pageNumber: number):string {
        return pageNumber === this.page ? 'active' : '';
    }

    sortProducts(key: string):void {
        this.productsService.sortProducts(key)      
    }

    showAlert(alertContentKey: number, alertItem: string){
        this.alertService.showAlert(alertContentKey, alertItem)
    }
}
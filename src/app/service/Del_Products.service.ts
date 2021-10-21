import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ProductsService{
    public text: string = "";
    public price!: number;
    public productId: number = 4;      
    public amount: number = 1; 
    public totalPrice: number = 0;
    public id!: number;
    public product: any;

    public Products: Product[] = 
    [
        { purchase: "Хлеб", done: false, price: 15.9,id:1, amount:1 },
        { purchase: "Масло", done: false, price: 60,id:2, amount:1 },
        { purchase: "Картофель", done: true, price: 22.6,id:3, amount:1 },
        { purchase: "Сыр", done: false, price:310,id:4, amount:1 }
    ];

/*    addProduct(text: string, price: number, productId: number, products: Product[]): Product[]{
        this.productId+=1;
        this.Products.push(new Product(text, price, this.productId));     
        return  this.Products;     
    }*/

/*    addProductTest*/

    addProduct(productAddForm : FormGroup){
        this.productId+=1;
        this.Products.push(new Product(productAddForm.value.productName,
                            productAddForm.value.productPrice, 
                            this.productId));     
        return  this.Products; 
    }

    editProduct(id:number, purchaseEdit:string){
        console.log(id)
        console.log(purchaseEdit)
        this.product.purchase = purchaseEdit;
    }
      
    DelProduct(product:Product, products: Product[]): Product[] {
        this.Products = this.Products.filter(a => a.id !== product.id);
        return this.Products;
    }

    DelAllProduct(products: Product[]): Product[]{       
        this.Products = this.Products.filter(a => a.done != true);
        return this.Products
    }

    CalcTotalPrice(products:Product[]) :number{
        this.totalPrice =0;
        this.Products.forEach(product=>{
           this.totalPrice+=product.price * product.amount;     
        }); 
        return this.totalPrice;        
    }

    InfoProduct(id:number){      
        return this.product = this.Products.find(a => a.id == id);
    };

    changeProductsList(products: Product[]){
        this.Products = products;    
    }

}
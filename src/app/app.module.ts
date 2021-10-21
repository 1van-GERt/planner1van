import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent }   from './app.component';
import { ProductsComponent }   from './modules/products/products.component';
import { HomeComponent }   from './modules/home/home.component';
import { ProductInfoComponent }   from './modules/productInfo/productInfo.component';
import { ProductEditComponent }   from './modules/productEdit/productEdit.component';
import { SetingMenuComponent } from './modules/setingMenu/setingMenu.component'

import { Purchase10Pipe } from './productPurchase.pipe'

import { ModalModule } from'./modules/modal/modal.module';
import { AlertModule } from'./modules/alert/alert.module';
import { HomeModule } from'./modules/home/home.module';
import { ProductEditModule } from'./modules/productEdit/productEdit.module'
import { ProductInfoModule } from'./modules/productInfo/productInfo.module'
import { ProductsModule } from'./modules/products/products.module'
import { ProductsAlertContentModule } from'./modules/products/productsAlertContent/productsAlertContent.module'
import { SetingMenuModule } from'./modules/setingMenu/setingMenu.module'

import { SharedModule } from'./modules/shared/shared.module'
import { RightMenuContainerModule } from'./modules/rightMenuContainer/rightMenuContainer.module'




const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'seting', component: SetingMenuComponent},
    { path: 'products/info/:id', component: ProductInfoComponent},
    { path: 'products/edit/:id', component: ProductEditComponent},
    { path: '**', redirectTo: '/' }
];
 
@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        ModalModule,
        AlertModule,
        HomeModule,
        ProductEditModule,
        ProductInfoModule,
        ProductsModule,
        ProductsAlertContentModule,
        SetingMenuModule,
        SharedModule,

    ],
    
    declarations: [ 
    	AppComponent,
        Purchase10Pipe,
    ],

    providers: [
        AppComponent,
    ],

    bootstrap:    [ AppComponent ]
})

export class AppModule { }
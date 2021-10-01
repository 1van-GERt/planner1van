import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
 import {Routes, RouterModule} from '@angular/router';
import { AppComponent }   from './app.component';
import { ProductsComponent }   from './components/products/products.component';
import { HomeComponent }   from './components/home/home.component';
import { NotFoundComponent }   from './components/not-found.component';
import { ProductInfoComponent }   from './components/productInfo/productInfo.component';
import { ProductEditComponent }   from './components/productEdit/productEdit.component';
import { ModalComponent  }   from './components/modal/modal.component';
import { AlertComponent  }   from './components/alert/alert.component';
import { SetingMenuComponent } from './components/setingMenu/setingMenu.component'
import { AlertAddDelComponent }   from './components/products/alertAddDel/alertAddDel.component';



/*дочерняя маршрутизация*/
/*const productRoutes: Routes = [
    {path: 'price', component: ProductPriseCononent}
];*/

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
        RouterModule.forRoot(appRoutes)
    ],
    
    declarations: [ 
    	AppComponent, 
        HomeComponent, 
    	ProductsComponent,
        SetingMenuComponent, 
        ProductInfoComponent,
        ProductEditComponent,
        ModalComponent,
        AlertComponent,
    	NotFoundComponent,
        AlertAddDelComponent
    ],

    providers: [
        AppComponent,
        ProductInfoComponent
    ],

    entryComponents:[
        ModalComponent,
        AlertComponent,
        AlertAddDelComponent
    ],

    bootstrap:    [ AppComponent ]
})

export class AppModule { }
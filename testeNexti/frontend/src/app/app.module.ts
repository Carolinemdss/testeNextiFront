import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './view/home/home.component';
import { ProductCrudComponent } from './view/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatButtonModule } from '@angular/material/button';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientCrudComponent } from './view/client-crud/client-crud.component';
import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import { OrderCrudComponent } from './view/order-crud/order-crud.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { OrderUpdateComponent } from './components/order/order-update/order-update.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { OrderDeleteComponent } from './components/order/order-delete/order-delete.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppComponent } from './app.component'
import { NgxMaskModule} from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ClientCreateComponent,
    ClientCrudComponent,
    OrderCreateComponent,
    OrderCrudComponent,
    ClientUpdateComponent,
    OrderUpdateComponent,
    ProductUpdateComponent,
    ClientDeleteComponent,
    ClientListComponent,
    ProductDeleteComponent,
    ProductListComponent,
    OrderDeleteComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

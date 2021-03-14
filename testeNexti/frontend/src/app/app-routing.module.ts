import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { ProductCrudComponent } from './view/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ClientCrudComponent } from './view/client-crud/client-crud.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { OrderCrudComponent } from './view/order-crud/order-crud.component';
import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import { OrderUpdateComponent } from './components/order/order-update/order-update.component';
import { OrderDeleteComponent } from './components/order/order-delete/order-delete.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete",
    component: ProductDeleteComponent
  },
  {
    path: "products/list",
    component: ProductListComponent
  },
  {
    path: "clients",
    component: ClientCrudComponent
  },
  {
    path: "clients/create",
    component: ClientCreateComponent
  },
  {
    path: "clients/update",
    component: ClientUpdateComponent
  },
  {
    path: "clients/delete",
    component: ClientDeleteComponent
  },
  {
    path: "clients/list",
    component: ClientListComponent
  },
  {
    path: "order",
    component: OrderCrudComponent
  },
  {
    path: "order/create",
    component: OrderCreateComponent
  },
  {
    path: "order/update",
    component: OrderUpdateComponent
  },
  {
    path: "order/delete",
    component: OrderDeleteComponent
  },
  {
    path: "order/list",
    component: OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

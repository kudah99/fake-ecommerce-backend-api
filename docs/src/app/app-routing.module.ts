import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { GetAllProductsComponent } from './components/get-all-products/get-all-products.component';
import { GetProductsByIdComponent } from './components/get-products-by-id/get-products-by-id.component';
import { GetProductByCategoryIdComponent } from './components/get-product-by-category-id/get-product-by-category-id.component';
import { GetAllCategoriesComponent } from './components/get-all-categories/get-all-categories.component';
import { GetCategoryByIdComponent } from './components/get-category-by-id/get-category-by-id.component';
import { GetAllCartsComponent } from './components/get-all-carts/get-all-carts.component';
import { GetCartByIdComponent } from './components/get-cart-by-id/get-cart-by-id.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent},
  {path: 'docs', component: DocsComponent, children:[
    {path: 'products', children: [
      { path: '', pathMatch: 'full', redirectTo: '/docs/products/get-all-products' },
      {path: 'get-all-products', component: GetAllProductsComponent},
      {path: 'get-product-by-id', component: GetProductsByIdComponent},
      {path: 'get-products-by-category-id', component: GetProductByCategoryIdComponent},
    ]},
    {
      path: 'categories', children: [
        { path: '', pathMatch: 'full', redirectTo: '/docs/categories/get-all-categories' },
        {path: 'get-all-categories', component: GetAllCategoriesComponent},
        {path: 'get-category-by-id', component: GetCategoryByIdComponent}
      ]
    },
    {
      path: 'cart', children: [
        { path: '', pathMatch: 'full', redirectTo: '/docs/cart/get-all-carts' },
        {path: 'get-all-carts', component: GetAllCartsComponent},
        {path: 'get-cart-by-id', component: GetCartByIdComponent}
      ]
    },

  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

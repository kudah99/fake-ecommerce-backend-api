import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { GetAllProductsComponent } from './components/get-all-products/get-all-products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent},
  {path: 'docs', component: DocsComponent, children:[
    {path: 'products', children: [
      { path: '', pathMatch: 'full', redirectTo: '/docs/products/get-all-products' },
      {path: 'get-all-products', component: GetAllProductsComponent}
    ]}
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

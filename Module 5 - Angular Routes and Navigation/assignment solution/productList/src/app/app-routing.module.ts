import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {ProductComponent} from '../app/product/product.component';
import {ContactComponent} from '../app/contact/contact.component'
import {ProdctDetailsComponent} from '../app/product/prodct-details/prodct-details.component';
import {ErrorComponent} from '../app/error/error.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent

  },
  {
    path: 'product/:id',
    component: ProdctDetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent

  },
  {
    path: 'not-found',
    component: ErrorComponent, data: { message: 'Page not found!' }
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

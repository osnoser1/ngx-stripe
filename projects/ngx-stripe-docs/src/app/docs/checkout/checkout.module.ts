import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DocsElementsModule } from '../../docs-elements/docs-elements.module';

import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent
  }
];

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DocsElementsModule
  ]
})
export class CheckoutModule {}

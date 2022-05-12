import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DocsElementsModule } from '../../docs-elements/docs-elements.module';

import { NgStrPaymentRequestButtonComponent } from './payment-request-button.component';

const routes: Routes = [
  {
    path: '',
    component: NgStrPaymentRequestButtonComponent
  }
];

@NgModule({
  declarations: [NgStrPaymentRequestButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DocsElementsModule
  ]
})
export class NgStrPaymentRequestButtonModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentiRoutingModule } from './pagamenti-routing.module';

import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    PagamentiRoutingModule
  ]
})
export class PagamentiModule { }

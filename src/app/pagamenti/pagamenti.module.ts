import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagamentiRoutingModule } from './pagamenti-routing.module';

import { SharedModule } from '../shared/shared.module';

import { NewComponent } from './new/new.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListComponent } from './list/list.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    NewComponent,
    HomePageComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PagamentiRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ]
})
export class PagamentiModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { EmailSigninComponent } from './email-signin/email-signin.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    EmailSigninComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})

export class UserModule { }

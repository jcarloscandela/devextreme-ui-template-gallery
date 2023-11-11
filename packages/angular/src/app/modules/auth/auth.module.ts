import { NgModule } from '@angular/core';

import {
  ResetPasswordFormModule,
  CreateAccountFormModule,
  ChangePasswordFormModule,
  LoginFormModule,
} from '../../components';

import { UnauthenticatedContentModule } from '../../layouts/unauthenticated-content/unauthenticated-content';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AuthRoutingModule
  ],
  providers: []
})
export class AuthModule { }

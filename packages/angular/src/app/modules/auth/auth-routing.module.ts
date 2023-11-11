import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    LoginFormComponent,
    ResetPasswordFormComponent,
    CreateAccountFormComponent,
    ChangePasswordFormComponent,
} from '../../components';
import { AuthGuardService } from '../../services';

const routes: Routes = [
    {

        path: 'login',
        component: LoginFormComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'reset-password',
        component: ResetPasswordFormComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'create-account',
        component: CreateAccountFormComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'change-password/:recoveryCode',
        component: ChangePasswordFormComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [AuthGuardService],
    exports: [RouterModule],
    declarations: [],
})
export class AuthRoutingModule { }

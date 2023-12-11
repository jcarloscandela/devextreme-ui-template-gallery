import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormPopupModule } from 'src/app/components';

const routes: Routes = [
    { path: '', component: UserListComponent }
];

@NgModule({
    declarations: [UserListComponent],
    exports: [UserListComponent],
    imports: [SharedModule, FormPopupModule, RouterModule.forChild(routes)]
})
export class UsersModule { }

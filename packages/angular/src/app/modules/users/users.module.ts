import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: UserListComponent }
];

@NgModule({
    declarations: [UserListComponent],
    exports: [UserListComponent],
    imports: [RouterModule.forChild(routes)]
})
export class UsersModule { }

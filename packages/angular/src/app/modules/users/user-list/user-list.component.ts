import { Component, inject } from "@angular/core";
import { DatagridDirective } from "../../shared/directives/datagrid.directive";
import { DatagridOptions } from "../../shared/types/datagrid";
import { UserService } from "../users.service";

@Component({
	selector: 'fs-user-list',
	templateUrl: './user-list.component.html'
})
export class UserListComponent implements DatagridDirective {
    service: UserService = inject(UserService);
    options: DatagridOptions = {
        title: "Users",
        dataSource: this.service.GetODataStore(),
        columns: [
            { field: "Id" },
            { field: "Email" },
            { field: "Name" }
        ],
        items: [{
            location: "after",
            locateInMenu: true,
            type: "button",
            icon: "plus",
            text: "Add User",
            onClick: () => {
                this.isAddUserPopupOpened = true;
            }
        },
        ]
    }

    isAddUserPopupOpened = false;
    onClickSaveNewUser = async () => {
        await this.service.Post({
            name: "Test",
            email: "test@gmail.com"
        });
    };
}
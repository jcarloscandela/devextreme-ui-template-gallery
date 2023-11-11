import { Component } from "@angular/core";
import DataSource from "devextreme/data/data_source";
import { DatagridDirective } from "../../shared/directives/datagrid.directive";

@Component({
	selector: 'fs-datagrid',
	template: '<p>user-list works!</p>'
})
export class UserListComponent implements DatagridDirective {
    dataSource: DataSource;
    
    constructor() {}
}
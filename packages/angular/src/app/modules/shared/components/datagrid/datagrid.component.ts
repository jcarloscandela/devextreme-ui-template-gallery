import { Component } from "@angular/core";
import DataSource from "devextreme/data/data_source";

@Component({
	selector: 'fs-datagrid',
	templateUrl: './datagrid.component.html'
})
export class DatagridComponent {
    dataSource: DataSource;
    
    constructor() {}
}
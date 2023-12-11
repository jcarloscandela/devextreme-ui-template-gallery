import { Component, Input, ViewChild } from "@angular/core";
import { DatagridOptions } from "../../types/datagrid";
import { DxDataGridComponent } from "devextreme-angular";

@Component({
    selector: 'fs-datagrid',
    templateUrl: './datagrid.component.html'
})
export class DatagridComponent {
    @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;

    @Input()
    options: DatagridOptions;

    constructor() { }

    refresh = () => {
        this.grid.instance.refresh();
    }
}


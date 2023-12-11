import { NgModule } from '@angular/core';
import { DxButtonModule, DxDataGridModule, DxToolbarModule } from 'devextreme-angular';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [DatagridComponent],
    imports: [ CommonModule, DxDataGridModule, DxToolbarModule, DxButtonModule ],
    exports: [ DatagridComponent],
    providers: [],
})
export class SharedModule { }

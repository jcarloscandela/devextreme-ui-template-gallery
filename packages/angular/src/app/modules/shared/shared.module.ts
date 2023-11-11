import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { DatagridComponent } from './components/datagrid/datagrid.component';

@NgModule({
    declarations: [DatagridComponent],
    imports: [ DxDataGridModule ],
    exports: [ DatagridComponent],
    providers: [],
})
export class SharedModule { }

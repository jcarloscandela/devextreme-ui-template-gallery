import { Directive } from "@angular/core";
import DataSource from "devextreme/data/data_source";

@Directive()
export abstract class DatagridDirective {
    abstract dataSource: DataSource;
    
    constructor() {}
}
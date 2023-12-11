import { Directive } from "@angular/core";
import { DatagridOptions } from "../types/datagrid";

@Directive()
export abstract class DatagridDirective {
    abstract options: DatagridOptions;
    
    constructor() {}
}
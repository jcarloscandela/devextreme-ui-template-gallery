import DataSource from "devextreme/data/data_source";
import ODataStore from "devextreme/data/odata/store";

export type DatagridOptions = {
    title: string;
    dataSource: DataSource | ODataStore;
    pageSize?: number;
    allowedPageSizes?: number[];
    columns: DatagridColumn[];
    items?: DatagridItem[];
}

export type DatagridColumn = {
    field: string;
    caption?: string;
    visible?: boolean;
}

export type DatagridItem = {
    location: string;
    locateInMenu: boolean;
    type: 'button';
    icon: string;
    text: string;
    onClick: Function;
}
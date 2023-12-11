import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import ODataStore from "devextreme/data/odata/store";
import { environment } from "src/environments/environment";

export abstract class BaseService<CreateModel> {
    abstract entity: string;
    httpClient: HttpClient = inject(HttpClient);

    GetODataStore(): ODataStore{
        return new ODataStore({
            url: `${environment.odata}/${this.entity}s`, //The s is important
            version: 4,
            key: "Id"
        })
    }

    async Post(entity: CreateModel): Promise<CreateModel>{
        return await this.httpClient.post<CreateModel>(`${environment.api}/${this.entity}`, entity).toPromise();
    }
}

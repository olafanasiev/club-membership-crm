import {Injectable} from '@angular/core';
import {Supplier} from '@models/supplier';
import {Page} from '@models/page';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CondOperator, RequestQueryBuilder} from '@nestjsx/crud-request';
import {isEmpty} from 'lodash';
import {CrudTableService} from '@shared/crud-table/crud-table.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService extends CrudTableService<Supplier> {
  static apiPath = `/api/supplier`;

  constructor(public http: HttpClient) {
    super(SupplierService.apiPath);
  }


  getFullEntity(id: number): Promise<Supplier> {
    const query = RequestQueryBuilder.create();
    query.setJoin({field: 'properties'});
    query.setJoin({field: 'properties.values'});
    return this.get(id, query);
  }

  getSuppliers(limit: number = 10, page: number = 0, name: string = ''): Observable<Page<Supplier>> {
    const queryBuilder: RequestQueryBuilder = RequestQueryBuilder.create();
    queryBuilder.setJoin({field: 'properties'});
    queryBuilder.setJoin({field: 'properties.values'});

    if (!isEmpty(name)) {
      queryBuilder.setFilter({
        field: 'name',
        value: name,
        operator: CondOperator.CONTAINS_LOW
      });
    }

    return super.getPaged(limit, page, queryBuilder);
  }


}

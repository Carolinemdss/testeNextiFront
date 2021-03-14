import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Client} from "../client.model";

const EXAMPLE_DATA: Client[] = [
  {id: 1, name: 'Hydrogen', cpf: '12345678901', birthDate: '01/01/01'},
  {id: 2, name: 'Helium', cpf: '12345678902', birthDate: '01/01/01'},
  {id: 3, name: 'Lithium', cpf: '12345678903', birthDate: '01/01/01'},
  {id: 4, name: 'Beryllium', cpf: '12345678904', birthDate: '01/01/01'},
  {id: 5, name: 'Boron', cpf: '12345678905', birthDate: '01/01/01'},
  {id: 6, name: 'Carbon', cpf: '12345678906', birthDate: '01/01/01'},
  {id: 7, name: 'Nitrogen', cpf: '12345678907', birthDate: '01/01/01'},
  {id: 8, name: 'Oxygen', cpf: '12345678908', birthDate: '01/01/01'},
  {id: 9, name: 'Fluorine', cpf: '12345678909', birthDate: '01/01/01'},
  {id: 10, name: 'Neon', cpf: '12345678901', birthDate: '01/01/01'},
  {id: 11, name: 'Sodium', cpf: '12345678902', birthDate: '01/01/01'},
  {id: 12, name: 'Magnesium', cpf: '12345678903', birthDate: '01/01/01'},
  {id: 13, name: 'Aluminum', cpf: '12345678904', birthDate: '01/01/01'},
  {id: 14, name: 'Silicon', cpf: '12345678905', birthDate: '01/01/01'},
  {id: 15, name: 'Phosphorus', cpf: '12345678906', birthDate: '01/01/01'},
  {id: 16, name: 'Sulfur', cpf: '12345678907', birthDate: '01/01/01'},
  {id: 17, name: 'Chlorine', cpf: '12345678908', birthDate: '01/01/01'},
  {id: 18, name: 'Argon', cpf: '12345678909', birthDate: '01/01/01'},
  {id: 19, name: 'Potassium', cpf: '12345678901', birthDate: '01/01/01'},
  {id: 20, name: 'Calcium', cpf: '12345678902', birthDate: '01/01/01'}
];

/**
 * Data source for the ClientList2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ClientListDatasource extends DataSource<Client> {
  data: Client[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Client[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Client[]): Client[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Client[]): Client[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

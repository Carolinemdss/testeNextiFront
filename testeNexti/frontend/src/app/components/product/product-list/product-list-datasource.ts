import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Product} from "../product.model";


// TODO: replace this with real data from your application
const EXAMPLE_DATA: Product [] = [
  {id: 1, SKU: 121213, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 2, SKU: 1212123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 3, SKU: 123223, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 4, SKU: 123223, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 5, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 6, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 7, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 8, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 9, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 10, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 11, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 12, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 13, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2},
  {id: 14, SKU: 123, name: 'Hydrogen', description: 'Marca', price: 2.50, quantity: 2}
];

/**
 * Data source for the ProductList2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductListDatasource extends DataSource<Product> {
  data: Product[] = EXAMPLE_DATA;
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
  connect(): Observable<Product[]> {
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
  private getPagedData(data: Product[]): Product[] {
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
  private getSortedData(data: Product[]): Product[] {
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

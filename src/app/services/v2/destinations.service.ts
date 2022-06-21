import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { TopFiveDestinationsResponse } from 'src/app/models/responses/v2/destination.responses';

export interface QueryParams {
  [key: string]: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private http: HttpClient) { }
  version: string = "2.0/"
  route: string = "top_five/destinations"

  /**
 * e.g :
 * const z = {userId: 1, name: 'rowad'} then
 * this method will return ["userId=1", "name=rowad"]
 */
  private mapQueryParamsToUrl(queryParams: QueryParams): Array<string> {
    return Object.keys(queryParams).map((key: string) => {
      return `${key}=${queryParams[key]}`;
    });
  }

  /**
 * In the return we will attach the '?' if the user provides a query params
 * and if the user provides a null we do not need to map the array to
 * anything, we just simply returns ''.
 * if there queryParams dose has some keys an values
 * e.g
 * const z = {userId: 1, name: 'rowad'} then
 * this method will return ["userId=1", "name=rowad"]
 */
  private correctFormatForQueryUrl(queryParams: QueryParams): string {
    if (!queryParams || queryParams == {}) {
      return '';
    }
    const queryParamsAsStr = this.mapQueryParamsToUrl(queryParams);
    return queryParamsAsStr.length === 0 ? '' : `?${queryParamsAsStr.join('&')}`;
  }

  /**
   * It takes in a queryParams object, formats it into a string, and then returns an observable of the
   * response from the API
   * @param {QueryParams} queryParams - QueryParams = {} or = { search_type: 'country' } 
   * @returns An Observable of type TopFiveDestinationsResponse
   */
  getTopFiveDestinations(queryParams: QueryParams = {}): Observable<TopFiveDestinationsResponse> {
    const correctFormatForQueryUrl = this.correctFormatForQueryUrl({ search_type: "city_or_country", ...queryParams });
    const url = `${environment.apiUrl}${this.version}${this.route}${correctFormatForQueryUrl}`
    return this.http.get<TopFiveDestinationsResponse>(url);
  }
}

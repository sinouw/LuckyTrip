import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Destination } from 'src/app/models/interfaces/destination.interfaces';
import { TopFiveDestinationsResponse } from 'src/app/models/responses/v2/destination.responses';
import { DestinationsService, QueryParams } from 'src/app/services/v2/destinations.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor(private destinationsService: DestinationsService) { }

  ngOnInit(): void {
    this.debounceFilter()
  }
  searchdata: Destination[] = [];
  selectedData: Destination
  text: string = "";
  searchSub$ = new Subject<string>();
  message: string = "Searching...";
  applyFilter(filterValue: string) {
    this.text = filterValue;
    this.searchSub$.next(this.text.trim().toLowerCase())
  }

  debounceFilter() {
    this.searchSub$.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((filterValue: string) => {
      this.text = filterValue;
      this.getTopFiveDestinations({ search_value: this.text.trim().toLowerCase() });
    });
  }

  getTopFiveDestinations(queryParams: QueryParams) {
    this.destinationsService.getTopFiveDestinations(queryParams)
      .subscribe((result: TopFiveDestinationsResponse) => {
        if (result?.destinations?.length) {
          this.searchdata = result.destinations.slice(0, 10)
          console.log("searchdata :", this.searchdata);
        } else {
          this.searchdata = []
          this.message = "No data found."
        }
      });
  }

  selectData(item: Destination) {
    this.selectedData = item;
    this.text = item?.country_name + ', ' + item?.city
    console.log("this.selectedData :", this.selectedData);
  }
}

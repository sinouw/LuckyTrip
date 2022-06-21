import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Destination } from 'src/app/models/interfaces/destination.interfaces';
import { TopFiveDestinationsResponse } from 'src/app/models/responses/v2/destination.responses';
import { DestinationsService, QueryParams } from 'src/app/services/v2/destinations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor(private destinationsService: DestinationsService, private router: Router) { }

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
      if (filterValue) {
        this.getTopFiveDestinations({ search_value: this.text.trim().toLowerCase() });
      } else {
        this.searchdata = []
      }
    });
  }

  subscription: Subscription;
  getTopFiveDestinations(queryParams: QueryParams) {
    this.subscription = this.destinationsService.getTopFiveDestinations(queryParams)
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

  destinationMessage = ""
  submit() {
    if (!this.selectedData) {
      console.log("Please select a destination")
      if (this.searchdata?.length) {
        this.text = ""
        this.searchdata = []
        this.router.navigate([`/result/${this.searchdata[0].id}`]);
      }
    } else {
      this.text = ""
      this.searchdata = []
      this.router.navigate([`/result/${this.selectedData.id}`]);
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subscription) this.subscription.unsubscribe()
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DestinationsService } from 'src/app/services/v2/destinations.service';
import { getDestinationsByIdResponse } from 'src/app/models/responses/v2/destination.responses';
import { Destination } from 'src/app/models/interfaces/destination.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-layout',
  templateUrl: './result-layout.component.html',
  styleUrls: ['./result-layout.component.css']
})
export class ResultLayoutComponent implements OnInit {

  constructor(private destinationsService: DestinationsService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (!params.id) {
        this.location.back();
      } else {
        console.log("id : ", params.id);
        this.getDestinationsById(params.id)
      }
    })
  }

  currentDestination: Destination
  subscription: Subscription;
  getDestinationsById(id: string) {
    console.log("getDestinationsById");
    this.subscription = this.destinationsService.getDestinationsById(id)
      .subscribe((result: getDestinationsByIdResponse) => {
        if (result?.destination && Object.keys(result?.destination)?.length && !result?.error) {
          /* A variable that is used to store the destination object that is returned from the API. */
          this.currentDestination = result.destination
          console.log("this.currentDestination :", this.currentDestination);
        } else {
          //error case
        }
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subscription) this.subscription.unsubscribe()
  }

}

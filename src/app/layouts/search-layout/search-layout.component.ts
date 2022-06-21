import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.css']
})
export class SearchLayoutComponent implements OnInit {
  title: string = 'Search LuckyTrip';
  description: string = '350 destinations, 1500 blog posts, Unlimited Trips';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  loader: boolean;
  constructor() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 2000)
   }

  ngOnInit(): void {
  }

}

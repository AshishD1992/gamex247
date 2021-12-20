import { Component, Input, OnInit } from '@angular/core';
// import { faCalendarAlt, faFileCsv } from '@fortawesome/free-solid-svg-icons';
// import { ReportsService } from 'src/app/services/reports.service';
import {DatePipe} from '@angular/common';
import {
  GridOptions,
  GridReadyEvent,
  GridApi,
  ColumnApi,
  CellClassParams,
} from 'ag-grid-community';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css'],
  providers: [ DatePipe ]
})
export class AccountStatementComponent implements OnInit {
  
  // faCalendarAlt = faCalendarAlt;
  // faFileCsv = faFileCsv;
  private gridApi!: GridApi;




  columns = [
    // { field: 'marketId', headerName: 'Market ID' },
    { field: 'date', headerName: 'Settled Date',minWidth: 100 },
    { field: 'description', headerName: 'Narration', minWidth: 300 },
    {
      field: 'dr',
      headerName: 'Debit',
      minWidth: 100,
      cellClass: (params: CellClassParams) =>
        params.value > 0 ? 'text-success' : 'text-danger',
    },
    {
      field: 'cr',
      headerName: 'Credit',
      minWidth: 100,
      cellClass: (params: CellClassParams) =>
        params.value > 0 ? 'text-success' : 'text-danger',
    },
    {
      field: 'balance',
      headerName: 'Balance',
      minWidth: 100,
      cellClass: (params: CellClassParams) =>
        params.value > 0 ? 'text-success' : 'text-danger',
    },
  ];
  rowData = [

  ];
  constructor(private dateformat:DatePipe) {
    // this.startDate = new Date();
    // this.endDate = new Date();
    // this.startDate.setDate(this.startDate.getDate() - 7);
    // this.endDate.setDate(this.endDate.getDate());
  }
  ngOnInit(): void {
    // this.AccountStatement();
  }
}
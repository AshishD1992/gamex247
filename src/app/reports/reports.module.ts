import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReportsComponent } from './reports.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AgGridModule } from 'ag-grid-angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { LeftsideComponent } from './leftside/leftside.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'myprofile',
        component:MyprofileComponent,
      },
      {
        path: 'leftside',
        component:LeftsideComponent,
      },
      {
        path: 'account-statement',
        component: AccountStatementComponent,
      },
     
    ],
  },
];


@NgModule({
  declarations: [
    MyprofileComponent,
    ReportsComponent,
    LeftsideComponent,
    AccountStatementComponent,
    
  ],
  imports: [
    CommonModule,
    
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AgGridModule.withComponents([]),
    
    RouterModule.forChild(routes),
  
  ],
  providers: [],
  exports: [RouterModule],
})
export class ReportsModule {}

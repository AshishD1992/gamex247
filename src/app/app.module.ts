import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FullmarketComponent } from './fullmarket/fullmarket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightsideComponent } from './rightside/rightside.component';

import { MidSideComponent } from './mid-side/mid-side.component';
// import { ReportsComponent } from './reports/reports.component';
// import { MyprofileComponent } from './reports/myprofile/myprofile.component';
// import{ReportsModule} from './reports/reports.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullmarketComponent,
    NavbarComponent,
    RightsideComponent,
    
    MidSideComponent,
    
    // ReportsComponent,
    
    // MyprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FullmarketComponent } from './fullmarket/fullmarket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightsideComponent } from './rightside/rightside.component';

import { MidSideComponent } from './mid-side/mid-side.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullmarketComponent,
    NavbarComponent,
    RightsideComponent,
    
    MidSideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

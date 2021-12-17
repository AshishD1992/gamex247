import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullmarketComponent } from './fullmarket/fullmarket.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightsideComponent } from './rightside/rightside.component';
import { MidSideComponent } from './mid-side/mid-side.component';
const routes: Routes = [
  {path:'', component:HeaderComponent,},
  {path:'fullmarket', component:FullmarketComponent},

{path:'nav', component:NavbarComponent,},
{path:'right', component:RightsideComponent,},
{path:'mid', component:MidSideComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

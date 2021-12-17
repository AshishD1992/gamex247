import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullmarketComponent } from './fullmarket/fullmarket.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'', component:HeaderComponent,},
  {path:'fullmarket', component:FullmarketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

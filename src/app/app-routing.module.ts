import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BundesligaComponent} from "./components/bundesliga/bundesliga.component";

const routes: Routes = [
  {
    path: 'bundesliga',
    component: BundesligaComponent
  },
  {
    path: '',
    redirectTo: '/bundesliga',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

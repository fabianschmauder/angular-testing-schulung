import {RouterModule, Routes} from '@angular/router';
import {BundesligaComponent} from "../components/bundesliga/bundesliga.component";

const routes: Routes = [
  {
    path: 'bundesliga',
    component: BundesligaComponent
  },
  {
    path: '',
    redirectTo: '/bundesliga',
    pathMatch: 'full'
  }
];

export default RouterModule.forRoot(routes);

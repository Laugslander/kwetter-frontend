import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from "./component/timeline/timeline.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {SearchComponent} from "./component/search/search.component";

const routes: Routes = [
  {path: '', redirectTo: '/timeline', pathMatch: 'full'},
  {path: 'timeline', component: TimelineComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search/:searchString', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

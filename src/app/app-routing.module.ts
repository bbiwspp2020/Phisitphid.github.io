import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectHistoryComponent } from './pages/project-history/project-history.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'project-history',component:ProjectHistoryComponent},
  { path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

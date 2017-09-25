import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { PrivateComponent } from './private/private.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'bio',
    component: BioComponent,
    children: []
  },
  {
    path: 'private',
    component: PrivateComponent,
    children: []
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: []
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    children: []
  },
  {
    path: 'resources',
    component: ResourcesComponent,
    children: []
  },
  // {
  //   path: 'class/:id',
  //   component: Class,
  //   children: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

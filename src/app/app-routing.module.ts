import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BioComponent } from './pages/bio/bio.component';
import { PrivateComponent } from './pages/private/private.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ResourcesComponent } from './pages/resources/resources.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

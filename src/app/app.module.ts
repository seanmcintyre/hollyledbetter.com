import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';

import { BioComponent } from './pages/bio/bio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivateComponent } from './pages/private/private.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ResourcesComponent } from './pages/resources/resources.component';

import { QuotesComponent } from './quotes/quotes.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    ContactComponent,
    PrivateComponent,
    ScheduleComponent,
    ResourcesComponent,
    NavigationComponent,
    HomeComponent,
    QuotesComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

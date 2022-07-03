import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import{ Routes, RouterModule } from "@angular/router"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"planets/:id",component:PlanetsComponent},
  {path:"person/:id",component:PersonComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PersonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

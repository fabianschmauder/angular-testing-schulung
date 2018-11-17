import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {BundesligaComponent} from "./components/bundesliga/bundesliga.component";
import {HttpClientModule} from "@angular/common/http";
import {BundesligaTabelleComponent} from "./components/bundesliga-tabelle/bundesliga-tabelle.component";
import {MannschaftFilterComponent} from "./components/mannschaft-filter/mannschaft-filter.component";
import {BundesligaSucheComponent} from "./components/bundesliga-suche/bundesliga-suche.component";

@NgModule({
  declarations: [
    AppComponent,
    BundesligaComponent,
    BundesligaTabelleComponent,
    BundesligaSucheComponent,
    MannschaftFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

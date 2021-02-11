import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'


import { CountryListComponent } from './Componants/country-list/country-list.component';
import { CreateCountryComponent } from './Componants/create-country/create-country.component';
import { FormsModule } from '@angular/forms';
import { UpdateCountryComponent } from './Componants/update-country/update-country.component'

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CreateCountryComponent,
    UpdateCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

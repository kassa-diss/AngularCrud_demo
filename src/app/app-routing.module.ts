import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './Componants/country-list/country-list.component';
import { CreateCountryComponent } from './Componants/create-country/create-country.component';
import { UpdateCountryComponent } from './Componants/update-country/update-country.component';

const routes: Routes = [
  {path: 'countries', component: CountryListComponent},
  {path: 'create-country', component: CreateCountryComponent},
  {path: '', redirectTo:'countries',pathMatch: 'full'},
  {path: 'update-country/:id', component: UpdateCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/country';
import { CountryService } from 'src/app/country.service';



@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries!: Country[]; 

  constructor(private countryService: CountryService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries(){
    this.countryService.getCountrylist().subscribe(data =>{
      this.countries = data ;
    });
  }

  updateCountry(id: number){
    this.router.navigate([ 'update-country', id]);

  }

}

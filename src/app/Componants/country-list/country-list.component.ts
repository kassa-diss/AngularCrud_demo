import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/country';
import { CountryService } from 'src/app/country.service';



@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries!: Country[]; 

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries(){
    this.countryService.getCountrylist().subscribe(data =>{
      this.countries = data ;
    });
  }

}

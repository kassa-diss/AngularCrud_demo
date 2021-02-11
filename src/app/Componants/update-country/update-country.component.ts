import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/country';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {


  id!: number;
  country: Country = new Country();
  constructor( private countryService: CountryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.countryService.getCountryById(this.id).subscribe(data =>{
      this.country = data;
    },error =>console.log(error));
  }

}

import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../services/universities.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {
  countryName: string = ''; 
  universities: any[] = []; 

  constructor(private universitiesService: UniversitiesService) {}

  async searchUniversities() {
    if (this.countryName) {
      try {
        this.universities = await this.universitiesService.getUniversitiesByCountry(this.countryName);
      } catch (error) {
        console.error('Error searching universities:', error);
        this.universities = [];
      }
    }
  }

  ngOnInit() {}
}

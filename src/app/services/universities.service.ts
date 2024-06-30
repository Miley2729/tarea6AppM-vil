import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  constructor() { }

  async getUniversitiesByCountry(countryName: string): Promise<any[]> {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${countryName}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching universities:', error);
      return [];
    }
  }
}

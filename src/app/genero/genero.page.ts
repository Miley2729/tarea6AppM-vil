import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
  name: string = ''; 
  gender: string = ''; 
  backgroundColor: string = 'white';

  constructor() {}

  async predictGender() {
    if (this.name) {
      try {
        const response = await axios.get(`https://api.genderize.io/?name=${this.name}`);
        this.gender = response.data.gender;

        if (this.gender === 'male') {
          this.gender = 'Masculino';
          this.backgroundColor = 'blue';
        } else if (this.gender === 'female') {
          this.gender = 'Femenino';
          this.backgroundColor = 'pink';
        } else {
          this.gender = 'Desconocido';
          this.backgroundColor = 'grey';
        }
      } catch (error) {
        console.error('Error al predecir el género:', error);
        this.gender = 'Error';
        this.backgroundColor = 'red';
      }
    }
  }

  ngOnInit() {}
}

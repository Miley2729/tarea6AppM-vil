import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  name: string = ''; // Inicializa name
  age: number | null = null; // Inicializa age
  ageGroup: string = ''; // Inicializa ageGroup
  ageMessage: string = ''; // Inicializa ageMessage
  ageImage: string = ''; // Inicializa ageImage

  constructor() {}

  async predictAge() {
    if (this.name) {
      try {
        const response = await axios.get(`https://api.agify.io/?name=${this.name}`);
        this.age = response.data.age;

        if (this.age !== null) {
          if (this.age < 18) {
            this.ageGroup = 'Joven';
            this.ageMessage = 'Eres joven.';
            this.ageImage = 'assets/icon/joven.jpg'; 
          } else if (this.age < 60) {
            this.ageGroup = 'Adulto';
            this.ageMessage = 'Eres un adulto.';
            this.ageImage = 'assets/icon/adulto.jpg'; 
          } else {
            this.ageGroup = 'Anciano';
            this.ageMessage = 'Eres un anciano.';
            this.ageImage = 'assets/icon/anciano.jpg'; 
          }
        }
      } catch (error) {
        console.error('Error al predecir la edad:', error);
      }
    }
  }

  ngOnInit() {}
}

// inscription.component.ts
import { Component } from '@angular/core';
import { InscriptionService } from './inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  username: string = '';
  password: string = '';
  registrationMessage: string = '';

  constructor(private inscriptionService: InscriptionService) {}

  register() {
    this.inscriptionService.register(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          this.registrationMessage = `Registration successful for ${response.user.username}`;
        } else {
          this.registrationMessage = 'Registration failed';
        }
      },
      (error) => {
        console.error('Error during registration:', error);
        this.registrationMessage = 'Internal Server Error';
      }
    );
  }
}

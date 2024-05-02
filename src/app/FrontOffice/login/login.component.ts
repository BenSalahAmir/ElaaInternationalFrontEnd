import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | undefined;

  constructor(private authService: AuthServiceService, private router: Router) {}

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };
  
    this.authService.login(credentials).subscribe(
      (response) => {
        // Successful login
        console.log('Login successful:', response);

        
    
  
        // Retrieve the user role from local storage
        const userRole = localStorage.getItem('userRole');
  
        // Navigate based on the user role
        if (userRole === 'ROLE_USER') {
          this.router.navigate(['/upload']).then(() => {
            window.location.reload();
          });
        } else if (userRole === 'ROLE_ADMIN') {
          this.router.navigate(['/dashbord']).then(() => {
            window.location.reload();
          });
        } else {
          console.error('Unexpected user role:', userRole);
          window.alert('Unexpected user role. Please contact support.');
        }
      },
      (error) => {
        console.error('Login error:', error);
        window.alert('Login error. Please try again.');
      }
    );
  }
  






}
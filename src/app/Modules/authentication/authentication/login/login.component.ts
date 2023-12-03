import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private AccountServ : RegisterService, private route : Router){}
  userData = {
    email: '',
    password: ''
  };
  model: any;

  onSubmit() {
    this.fillmodel()
    this.AccountServ.registerUser(this.model).subscribe(
      (response) =>{
        console.log('User login')
        this.route.navigate(['/tic-tac-toe']);
      },
      (error) =>{
        console.log('error')
      }
    )
  }
  fillmodel() {
    this.model = {
      email: this.userData.email,
      password: this.userData.password
    }
  }
}

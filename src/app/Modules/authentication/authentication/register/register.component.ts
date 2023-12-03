import { Component } from '@angular/core';
import { RegisterService } from './register.service'
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private AccountServ : RegisterService, private route : Router){}
  userData = {
    username: '',
    phoneNumber: '',
    email: '',
    location: '',
    password: ''
  };
  model: any;

  onSubmit() {
    this.fillmodel()
    this.AccountServ.registerUser(this.model).subscribe(
      (response) =>{
        console.log('User has been registered')
        this.route.navigate(['/login']);
      },
      (error) =>{
        console.log('error')
      }
    )
  }
  fillmodel() {
    this.model = {
      email: this.userData.email,
      userName: this.userData.username,
      phoneNumber: this.userData.phoneNumber,
      location: this.userData.location,
      password: this.userData.password
    }
  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = ""
  phoneNumber: string = ""
  email: string = ""
  location: string = ""
  password: string = ""

  constructor() {

  }
  register() {
    const user = {
      userName : this.username,
      email: this.email,
      password : this.password,
      phoneNumber : this.phoneNumber,
      location : this.location
    }
    debugger
  }
}

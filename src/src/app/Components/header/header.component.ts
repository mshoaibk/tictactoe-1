import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private route: ActivatedRoute) { }
  ngOnInit(){
    this.isOnLoginPage()
    this.isOnsignupPage()
  }
  isOnLoginPage(): boolean {
    return this.route.snapshot.url[0]?.path === 'login';
  }
  isOnsignupPage(): boolean {
    return this.route.snapshot.url[0]?.path === 'register';
  }
}

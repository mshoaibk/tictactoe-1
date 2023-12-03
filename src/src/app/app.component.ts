import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showSplash: boolean = true;

  constructor(private router: Router) {

  }
  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false;
      this.router.navigate(['/login']);
    }, 6800);
  }
}

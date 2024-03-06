import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
ngOnInit(){}

notifications(){
  this.router.navigate(['/notifications']);
}
calendar(){
  this.router.navigate(['/calendar']);
}
empty(){
  this.router.navigate(['/empty']);
}
}

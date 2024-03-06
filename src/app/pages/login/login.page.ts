import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    // Here you can add your login logic
    if (this.username === 'admin' && this.password === 'password') {
      // For demo purposes, navigate to a home page if login is successful
      this.router.navigate(['pages/home']);
     } else {
      alert('Invalid username or password');
    }} 

}
  
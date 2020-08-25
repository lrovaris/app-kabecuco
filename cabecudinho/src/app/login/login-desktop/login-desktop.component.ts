import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-desktop',
  templateUrl: './login-desktop.component.html',
  styleUrls: ['./login-desktop.component.scss'],
})
export class LoginDesktopComponent implements OnInit {

  navigateLogin(){
    this.router.navigate(['/f-login']);
  }
  constructor(private router: Router) { }

  ngOnInit() {}

}

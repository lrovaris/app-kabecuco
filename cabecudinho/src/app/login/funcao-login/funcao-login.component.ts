import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from "../auth/auth.service";
import { NgForm, FormBuilder, FormGroup } from "@angular/forms";
import {Http} from "@angular/http";

@Component({
  selector: 'app-funcao-login',
  templateUrl: './funcao-login.component.html',
  styleUrls: ['./funcao-login.component.scss'],
})
export class FuncaoLoginComponent implements OnInit {

  user: FormGroup;
  public innerWidth: any;

  navigateLogin(){
    this.router.navigate(['/listar']);
  }
  navigateCadastro(){
    this.router.navigate(['/cadastro']);
  }
  navigateEsqueci(){
    this.router.navigate(['/esqueci']);
  }


  onLogin() {

   this.authService.login(this.user.value.login, this.user.value.password);
   // this.http.post('http://localhost:3000/login',this.user.value).subscribe(response => {
    // console.log(response);
  // });
  }






  constructor(
      private router: Router,
      public authService: AuthService,
      private http: Http,
      private formbuilder: FormBuilder
  ) {
    this.user = this.formbuilder.group({
      login: [null],
      password: [null]
    });
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

}

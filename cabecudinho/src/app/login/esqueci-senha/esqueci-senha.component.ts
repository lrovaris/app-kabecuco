import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss'],
})
export class EsqueciSenhaComponent implements OnInit {

  navigateLogin(){
    this.router.navigate(['/login']);
  }


  constructor(private router: Router) { }

  ngOnInit() {}

}

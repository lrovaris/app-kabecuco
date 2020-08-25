import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listar-bonecos',
  templateUrl: './listar-bonecos.component.html',
  styleUrls: ['./listar-bonecos.component.scss'],
})
export class ListarBonecosComponent implements OnInit {

  stlURL: string;


  navigateNewBoneco() {
    this.router.navigate(['/novo']);
  }


  constructor(private router: Router) {
    this.stlURL = './assets/boneco.stl';
   }

  ngOnInit() {}

}

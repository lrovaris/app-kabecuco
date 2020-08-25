import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-listar-boneco-mobile',
  templateUrl: './listar-boneco-mobile.component.html',
  styleUrls: ['./listar-boneco-mobile.component.scss'],
})
export class ListarBonecoMobileComponent implements OnInit {

  navigateNew(){
    this.router.navigate(['/novo']);
  }
  navigateBack(){
    this.router.navigate(['/login']);
  }


  constructor(private router: Router) { }

  ngOnInit() {}

}

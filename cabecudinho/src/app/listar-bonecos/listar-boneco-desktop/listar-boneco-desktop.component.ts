import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-listar-boneco-desktop',
  templateUrl: './listar-boneco-desktop.component.html',
  styleUrls: ['./listar-boneco-desktop.component.scss'],
})
export class ListarBonecoDesktopComponent implements OnInit {


  navigateNew(){
    this.router.navigate(['/novo']);
  }
  navigateList(){
    this.router.navigate(['/listar']);
  }


  constructor(private router: Router) { }

  ngOnInit() {}

}

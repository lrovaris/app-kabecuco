import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exibir-boneco',
  templateUrl: './exibir-boneco.component.html',
  styleUrls: ['./exibir-boneco.component.scss'],
})
export class ExibirBonecoComponent implements OnInit {

  stlURL: string;


  constructor() {
    this.stlURL = '../../assets/boneco.stl';
  }
  ngOnInit() {}

}

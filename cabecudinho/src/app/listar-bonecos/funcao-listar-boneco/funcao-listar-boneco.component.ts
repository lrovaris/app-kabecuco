import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcao-listar-boneco',
  templateUrl: './funcao-listar-boneco.component.html',
  styleUrls: ['./funcao-listar-boneco.component.scss'],
})
export class FuncaoListarBonecoComponent implements OnInit {

  stlURL: string;
  Bonecos = [];
  boneco = {
    name: "joao da silva neto",
    img: "https://picsum.photos/370/410"
  };



  constructor() {
    this.stlURL = '../../assets/boneco.stl';
  }

  ngOnInit() {
    this.Bonecos.push(this.boneco);
    this.Bonecos.push(this.boneco);
    this.Bonecos.push(this.boneco);
    this.Bonecos.push(this.boneco);
    this.Bonecos.push(this.boneco);
    this.Bonecos.push(this.boneco);
    this.Bonecos.push(this.boneco);
    this.Bonecos.push(this.boneco);

  }

}

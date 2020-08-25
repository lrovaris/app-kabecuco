import {Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides } from "@ionic/angular";
import { IonSlide } from "@ionic/angular";

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.scss'],
})
export class AcessoriosComponent implements OnInit {
  @ViewChild(IonSlides) slider: IonSlides;
  width = document.documentElement.clientWidth;
  public innerWidth: any;
  margin = false;

  slideOpts = {
    slidesPerView: 3,
    speed: 400,
  };

  Acessorios = [];
  acessorio = {
    id: "01",
    name: "acessorio",
    img: "https://1.bp.blogspot.com/-BeT20Vbny6E/WqxkBdrmkPI/AAAAAAAAuHU/ETkTUpX6UGURukdHbHWYv799PaJajL3VgCLcBGAs/s1600/acess%25C3%25B3rio%2Bmascara%2B%25282%2529.png"
  };
  acessorio2 = {
    id: "02",
    name: "acessorio",
    img: "https://1.bp.blogspot.com/-BeT20Vbny6E/WqxkBdrmkPI/AAAAAAAAuHU/ETkTUpX6UGURukdHbHWYv799PaJajL3VgCLcBGAs/s1600/acess%25C3%25B3rio%2Bmascara%2B%25282%2529.png"
  };

  acessorio3 = {
    id: "03",
    name: "acessorio",
    img: "https://img.pngio.com/frame-png-images-vector-and-psd-files-free-download-on-pngtree-picture-frame-png-360_360.png"
  };



  log(x) {
    console.log(x);
  }

  constructor() {

  }

  ngOnInit() {


    if(this.innerWidth || this.width >= 600){
      this.slideOpts.slidesPerView = 3;
      this.slideOpts.speed = 300;
      this.margin = true;
    }

    if(this.innerWidth || this.width < 600){
      this.slideOpts.slidesPerView = 3;
      this.slideOpts.speed = 600;
      this.margin = false;
    }

    this.Acessorios.push(this.acessorio);
    this.Acessorios.push(this.acessorio2);
    this.Acessorios.push(this.acessorio3);

  }

}

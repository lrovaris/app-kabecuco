import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Load3DService } from "./load3-d.service";
import {IonSlides} from "@ionic/angular";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import * as THREE from "three";



@Component({
  selector: 'app-boneco',
  templateUrl: './boneco.component.html',
  styleUrls: ['./boneco.component.scss'],
})
export class BonecoComponent implements OnInit {
  @ViewChild('rendererCanvas', null)
  // @ViewChild('container') elementRef: ElementRef;
  // @ViewChild(IonSlides) slider: IonSlides;
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  // --------- nomes ---------

  camisaName = '';
  calcaName = '';
  tenisName = '';
  meiaName = '';
  saiaName = '';
  cintoName = '';
  gravataName = '';
  cachecolName = '';
  luvaName = '';
  relogioName = '';
  segurandoName = '';
  vestidoName = '';
  formatoName = '';
  olhoName = '';
  narizName = '';
  barbaName = '';
  oculosName = '';
  cabeloCurtoName = '';
  orelhaName = '';
  sobrancelhaName = '';
  bocaName = '';
  chapeuName = '';
  pintaName = '';

  // Cores Manuais -------------------------
  roxo = {
    hex: '#382940',
    img: "https://www.colorhexa.com/382940.png"
  };
  branco = {
    hex: '#ffffff',
    img: "https://www.colorhexa.com/ffffff.png"
  };
  azulClaro = {
    hex: '#3399FF',
    img: "https://www.colorhexa.com/3399FF.png"
  };
  azulClaro2 = {
    hex: '#6FEDFD',
    img: "https://www.colorhexa.com/6FEDFD.png"
  };
  verde = {
    hex: '#7EE441',
    img: "https://www.colorhexa.com/7EE441.png"
  };
  verdeEscuro = {
    hex: '#36855D',
    img: "https://www.colorhexa.com/36855D.png"
  };
  laranja = {
    hex: '#D2794F',
    img: "https://www.colorhexa.com/D2794F.png"
  };
  marrom = {
    hex: '#78353A',
    img: "https://www.colorhexa.com/78353A.png"
  };
  vermelho = {
    hex: '#E93F46',
    img: "https://www.colorhexa.com/E93F46.png"
  };
  nude = {
    hex: '#FFCD9C',
    img: "https://www.colorhexa.com/FFCD9C.png"
  };
  amarelo = {
    hex: '#FDC234',
    img: "https://www.colorhexa.com/FDC234.png"
  };
  rosa = {
    hex: '#C13FB7',
    img: "https://www.colorhexa.com/C13FB7.png"
  };
  cinza = {
    hex: '#7784B1',
    img: "https://www.colorhexa.com/7784B1.png"
  };
  cinzaClaro = {
    hex: '#B2BDC0',
    img: 'https://www.colorhexa.com/B2BDC0.png'
  };
  amarelinho = {
    hex: '#DCFF6F',
    img: "https://www.colorhexa.com/DCFF6F.png"
  };
  rosaClaro = {
    hex: '#FF80A9',
    img: "https://www.colorhexa.com/FF80A9.png"
  };
  amarelo2 = {
    hex: '#FCC135',
    img: "https://www.colorhexa.com/FCC135.png"
  };
  amareloClaro = {
    hex: '#FFF275',
    img: "https://www.colorhexa.com/FFF275.png"
  };

  // Cores Manuais -------------------------
  // itens manuais -------------------------------
  jaqueta = {
    id: '../../assets/menina_testes/ryan/Jaqueta.stl',
    name: "Jaqueta",
    img: "https://cdn.discordapp.com/attachments/620663264946421782/623539967586467841/Jaqueta.png"
  };
  meia = {
    id: '../../assets/menina_testes/ryan/Meia.stl',
    name: "Meias",
    img: "https://cdn.discordapp.com/attachments/620663264946421782/623539978479337472/SPOILER_Meias.png"
  };
  tenis = {
    id: '../../assets/menina_testes/ryan/Tenis.stl',
    name: "Tenis",
    img: "https://cdn.discordapp.com/attachments/620663264946421782/623539980815302697/SPOILER_Tenis.png"
  };
  relogio = {
    id: '../../assets/menina_testes/ryan/Relogio.stl',
    name: "Relogio",
    img: "https://cdn.discordapp.com/attachments/620663264946421782/623539984191717386/SPOILER_Relogio.png"
  };
  cinto = {
    id: '../../assets/menina_testes/ryan/Cinto.stl',
    name: "Cinto",
    img: "https://cdn.discordapp.com/attachments/620663264946421782/623539990156017664/CInto.png"
  };
  calca = {
    id: '../../assets/menina_testes/ryan/Calca.stl',
    name: "Calca",
    img: "https://cdn.discordapp.com/attachments/620663264946421782/623539987668926475/SPOILER_Calca.png"
  };
  camisa = {
    id: '../../assets/menina_testes/ryan/Camisa.stl',
    name: "Camiseta",
    img: "https://cdn.discordapp.com/attachments/620663264946421782/623539987945750528/SPOILER_Camiseta.png"
  };
  saia = {
    id: '../../assets/menina_testes/ryan/Saia.stl',
    name: "Saia",
    img: "https://cdn.discordapp.com/attachments/620663264946421782/624966942603739166/Saia.png"
  };
  gravata = {
    id: '../../assets/menina_testes/ryan/Gravata.stl',
    name: "Gravata",
    img: "assets/pngs/Gravata.png"
  };
  cachecol = {
    id: '../../assets/menina_testes/ryan/Cachecol.stl',
    name: "Cachecol",
    img: "assets/pngs/Cachecol.png"
  };
  luva = {
    id: '../../assets/menina_testes/ryan/Luva.stl',
    name: "Luvas",
    img: "assets/pngs/Luvas.png"
  };
  segurando = {
    id: '../../assets/menina_testes/ryan/Bengala.stl',
    name: "Bengala",
    img: "assets/pngs/Bengala.png"
  };
  vestido = {
    id: '../../assets/menina_testes/ryan/Vestido.stl',
    name: "Vestido",
    img: "assets/pngs/Vestido.png"
  };
  formato = {
    id: '../../assets/menina_testes/ryan/Rosto2.stl',
    name: "Rosto2",
    img: "assets/pngs/Olhos2.png"
  };
  olho = {
    id: '../../assets/menina_testes/ryan/Olhos.stl',
    name: "Olhos",
    img: "assets/pngs/Olhos.png"
  };
  nariz = {
    id: '../../assets/menina_testes/ryan/Nariz.stl',
    name: "Nariz",
    img: "assets/pngs/Nariz.png"
  };
  barba = {
    id: '../../assets/menina_testes/ryan/Barba.stl',
    name: "Barba",
    img: "assets/pngs/Barba.png"
  };
  oculos = {
    id: '../../assets/menina_testes/ryan/Oculos.stl',
    name: "Oculos",
    img: "assets/pngs/Oculos.png"
  };
  cabeloCurto = {
    id: '../../assets/menina_testes/ryan/Cabelo.stl',
    name: "Cabelo",
    img: "assets/pngs/Cabelo.png"
  };
  orelha = {
    id: '../../assets/menina_testes/ryan/Orelha.stl',
    name: "Orelhas",
    img: "assets/pngs/Orelhas.png"
  };
  sobrancelha = {
    id: '../../assets/menina_testes/ryan/Sobrancelha.stl',
    name: "Sobrancelha",
    img: "assets/pngs/Sobrancelha.png"
  };
  boca = {
    id: '../../assets/menina_testes/ryan/Boca.stl',
    name: "Boca",
    img: "assets/pngs/Boca.png"
  };
  pinta = {
    id: '../../assets/menina_testes/ryan/Pinta.stl',
    name: "Pinta",
    img: "assets/pngs/Pinta.png"
  };
  chapeu = {
    id: '../../assets/menina_testes/ryan/Chapeu.stl',
    name: "Chapeu",
    img: "assets/pngs/Chapeu.png"
  };

  slideOpts = {
    slidesPerView: 3,
    speed: 400,
  };

  slideOptsColor = {
    slidesPerView: 6,
    speed: 500,
  };

  width = document.documentElement.clientWidth;
  public innerWidth: any;
  margin = false;

  categoriaName = '';

  acessorioName = '';
  Colors = [];
  Acessorios = [];

  color = false;

  rosto = false;
  corpo = true;
  turnOn = false;
  acessorio: string;
  avatar: FormGroup;

  turnRostoOn() {
    this.rosto = true;
    this.corpo = false;
  }
  turnCorpoOn() {
    this.corpo = true;
    this.rosto = false;
  }

  onTurnOn() {
    this.turnOn = !this.turnOn;
  }

  onColorOn() {
    this.color = !this.color;
  }

  onAcessorioClick(name) {
    this.acessorioName = name + '.stl';
    this.color = !this.color;
  }

  constructor(private router: Router,
              private engServ: Load3DService) {
  }

  onCategoria(x) {
    switch (x) {
      case 'camisa' :
        this.categoriaName = '';
        this.categoriaName = 'Camisa';
        this.Acessorios = [];
        this.Acessorios.push(this.camisa);
        break;
      case 'calca':
        this.categoriaName = '';
        this.categoriaName = 'Calca';
        this.Acessorios = [];
        this.Acessorios.push(this.calca);
        break;
      case 'tenis':
        this.categoriaName = '';
        this.categoriaName = 'Tenis';
        this.Acessorios = [];
        this.Acessorios.push(this.tenis);
        break;
      case 'meia':
        this.categoriaName = '';
        this.categoriaName = 'Meia';
        this.Acessorios = [];
        this.Acessorios.push(this.meia);
        break;
      case 'saia':
        this.categoriaName = '';
        this.categoriaName = 'Saia';
        this.Acessorios = [];
        this.Acessorios.push(this.saia);
        break;
      case 'cinto':
        this.categoriaName = '';
        this.categoriaName = 'Cinto';
        this.Acessorios = [];
        this.Acessorios.push(this.cinto);
        break;
      case 'gravata':
        this.categoriaName = '';
        this.categoriaName = 'Gravata';
        this.Acessorios = [];
        this.Acessorios.push(this.gravata);
        break;
      case 'cachecol':
        this.categoriaName = '';
        this.categoriaName = 'Cachecol';
        this.Acessorios = [];
        this.Acessorios.push(this.cachecol);
        break;
      case 'luva':
        this.categoriaName = '';
        this.categoriaName = 'Luva';
        this.Acessorios = [];
        this.Acessorios.push(this.luva);
        break;
      case 'relogio':
        this.categoriaName = '';
        this.categoriaName = 'Relogio';
        this.Acessorios = [];
        this.Acessorios.push(this.relogio);
        break;
      case 'segurando':
        this.categoriaName = '';
        this.categoriaName = 'Segurando';
        this.Acessorios = [];
        this.Acessorios.push(this.segurando);
        break;
      case 'vestido':
        this.categoriaName = '';
        this.categoriaName = 'Vestido';
        this.Acessorios = [];
        this.Acessorios.push(this.vestido);
        break;
      case 'formato':
        this.categoriaName = '';
        this.categoriaName = 'Formato';
        this.Acessorios = [];
        this.Acessorios.push(this.formato);
        break;
      case 'olho':
        this.categoriaName = '';
        this.categoriaName = 'Olho';
        this.Acessorios = [];
        this.Acessorios.push(this.olho);
        break;
      case 'nariz':
        this.categoriaName = '';
        this.categoriaName = 'Nariz';
        this.Acessorios = [];
        this.Acessorios.push(this.nariz);
        break;
      case 'barba':
        this.categoriaName = '';
        this.categoriaName = 'Barba';
        this.Acessorios = [];
        this.Acessorios.push(this.barba);
        break;
      case 'oculos':
        this.categoriaName = '';
        this.categoriaName = 'Oculos';
        this.Acessorios = [];
        this.Acessorios.push(this.oculos);
        break;
      case 'calca':
        this.categoriaName = '';
        this.categoriaName = 'Calca';
        this.Acessorios = [];
        this.Acessorios.push(this.calca);
        break;
      case 'cabeloCurto':
        this.categoriaName = '';
        this.categoriaName = 'CabeloCurto';
        this.Acessorios = [];
        this.Acessorios.push(this.cabeloCurto);
        break;
      case 'orelha':
        this.categoriaName = '';
        this.categoriaName = 'Orelha';
        this.Acessorios = [];
        this.Acessorios.push(this.orelha);
        break;
      case 'sobrancelha':
        this.categoriaName = '';
        this.categoriaName = 'Sobrancelha';
        this.Acessorios = [];
        this.Acessorios.push(this.sobrancelha);
        break;
      case 'boca':
        this.categoriaName = '';
        this.categoriaName = 'Boca';
        this.Acessorios = [];
        this.Acessorios.push(this.boca);
        break;
      case 'chapeu':
        this.categoriaName = '';
        this.categoriaName = 'Chapeu';
        this.Acessorios = [];
        this.Acessorios.push(this.chapeu);
        break;
      case 'pinta':
        this.categoriaName = '';
        this.categoriaName = 'Pinta';
        this.Acessorios = [];
        this.Acessorios.push(this.pinta);
        break;

    }
  }


  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  async await(){
    await this.delay(5000);
    this.turnOn = !this.turnOn;
  }


  ngOnInit() {



    this.Colors.push(this.amarelo);
    this.Colors.push(this.amarelo2);
    this.Colors.push(this.cinza);
    this.Colors.push(this.cinzaClaro);
    this.Colors.push(this.rosa);
    this.Colors.push(this.rosaClaro);
    this.Colors.push(this.roxo);
    this.Colors.push(this.verde);
    this.Colors.push(this.verdeEscuro);
    this.Colors.push(this.amareloClaro);
    this.Colors.push(this.nude);
    this.Colors.push(this.marrom);
    this.Colors.push(this.laranja);
    this.Colors.push(this.vermelho);
    this.Colors.push(this.branco);
    this.Colors.push(this.azulClaro);
    this.Colors.push(this.azulClaro2);
    this.Colors.push(this.amarelinho);
    this.turnOn = false;
    console.log(this.turnOn);
    this.engServ.animate();
    this.engServ.createScene(this.rendererCanvas);

  }

  exportFinal(corpo, corCorpo){
    if(this.camisaName){this.exportCamisa()}
    if(this.calcaName){this.exportCalca()}
    if(this.tenisName){this.exportTenis()}
    if(this.meiaName){this.exportMeia()}
    if(this.cintoName){this.exportCinto()}
    if(this.luvaName){this.exportLuva()}
    if(this.saiaName){this.exportSaia()}
    if(this.vestidoName){this.exportVestido()}
    if(this.gravataName){this.exportGravata()}
    if(this.cachecolName){this.exportCachecol()}
    if(this.relogioName){this.exportRelogio()}
    if(this.segurandoName){this.exportSegurando()}
    if(this.olhoName){this.exportOlho()}
    if(this.pintaName){this.exportPinta()}
    if(this.bocaName){this.exportBoca()}
    if(this.barbaName){this.exportBarba()}
    if(this.chapeuName){this.exportChapeu()}
    if(this.cabeloCurtoName){this.exportCabeloCurto()}
    if(this.sobrancelhaName){this.exportSobrancelha()}
    if(this.narizName){this.exportNariz()}
    if(this.orelhaName){this.exportOrelha()}
    if(this.formatoName){this.exportFormato()}
    if(this.oculosName){this.exportOculos()}
    this.exportCorpo(corpo,corCorpo);
    this.exportCabeca(corpo,corCorpo);
  }

  exportCabeca(name, cor){
    this.engServ.exportCabeca(name,cor);
  }
  exportCorpo(name, cor){
    this.engServ.exportCorpo(name,cor);
  }
  exportCalca() {
    this.engServ.exportCalca(this.calcaName)
  }
  exportBarba() {
    this.engServ.exportBarba(this.barbaName)
  }
  exportCamisa() {
    this.engServ.exportCamisa(this.camisaName)
  }
  exportCachecol() {
    this.engServ.exportCachecol(this.cachecolName)
  }
  exportTenis() {
    this.engServ.exportTenis(this.tenisName)
  }
  exportBoca() {
    this.engServ.exportBoca(this.bocaName)
  }
  exportChapeu() {
    this.engServ.exportChapeu(this.chapeuName)
  }
  exportCabeloCurto() {
    this.engServ.exportCabeloCurto(this.cabeloCurtoName)
  }
  exportCinto() {
    this.engServ.exportCinto(this.cintoName)
  }
  exportFormato() {
    this.engServ.exportFormato(this.formatoName)
  }
  exportGravata() {
    this.engServ.exportGravata(this.gravataName)
  }
  exportLuva() {
    this.engServ.exportLuva(this.luvaName)
  }
  exportMeia() {
    this.engServ.exportMeia(this.meiaName)
  }
  exportOculos() {
    this.engServ.exportOculos(this.oculosName)
  }
  exportOlho() {
    this.engServ.exportOlho(this.olhoName)
  }
  exportOrelha() {
    this.engServ.exportOrelha(this.orelha)
  }
  exportPinta() {
    this.engServ.exportPinta(this.pintaName)
  }
  exportRelogio() {
    this.engServ.exportRelogio(this.relogioName)
  }
  exportSaia() {
    this.engServ.exportSaia(this.saiaName)
  }
  exportSegurando() {
    this.engServ.exportSegurando(this.segurandoName)
  }
  exportSobrancelha() {
    this.engServ.exportSobrancelha(this.sobrancelhaName)
  }
  exportNariz() {
    this.engServ.exportNariz(this.narizName)
  }
  exportVestido() {
    this.engServ.exportVestido(this.vestidoName)
  }


  loadObject(name, color) {
    console.log(this.categoriaName);
    switch (this.categoriaName) {
      case 'Camisa' :
        this.camisaName = this.categoriaName + '_color_' + color;
        this.engServ.camisaLoad(name, color);
        this.color = !this.color;
        break;
      case 'Calca':
        this.calcaName = this.categoriaName + '_color_' + color;
        this.engServ.calcaLoad(name, color);
        this.color = !this.color;
        break;
      case 'Tenis':
        this.tenisName = this.categoriaName + '_color_' + color;
        this.engServ.tenisLoad(name, color);
        this.color = !this.color;
        break;
      case 'Meia':
        this.meiaName = this.categoriaName + '_color_' + color;
        this.engServ.meiaLoad(name, color);
        this.color = !this.color;
        break;
      case 'Saia':
        this.saiaName = this.categoriaName + '_color_' + color;
        this.engServ.saiaLoad(name, color);
        this.color = !this.color;
        break;
      case 'Cinto':
        this.cintoName = this.categoriaName + '_color_' + color;
        this.engServ.cintoLoad(name, color);
        this.color = !this.color;
        break;
      case 'Gravata':
        this.gravataName = this.categoriaName + '_color_' + color;
        this.engServ.gravataLoad(name, color);
        this.color = !this.color;
        break;
      case 'Cachecol':
        this.cachecolName = this.categoriaName + '_color_' + color;
        this.engServ.cachecolLoad(name, color);
        this.color = !this.color;
        break;
      case 'Luva':
        this.luvaName = this.categoriaName + '_color_' + color;
        this.engServ.luvaLoad(name, color);
        this.color = !this.color;
        break;
      case 'Relogio':
        this.relogioName = this.categoriaName + '_color_' + color;
        this.engServ.relogioLoad(name, color);
        this.color = !this.color;
        break;
      case 'Segurando':
        this.segurandoName = this.categoriaName + '_color_' + color;
        this.engServ.segurandoLoad(name, color);
        this.color = !this.color;
        break;
      case 'Vestido':
        this.vestidoName = this.categoriaName + '_color_' + color;
        this.engServ.vestidoLoad(name, color);
        this.color = !this.color;
        break;
      case 'Formato':
        this.formatoName = this.categoriaName + '_color_' + color;
        this.engServ.formatoLoad(name, color);
        this.color = !this.color;
        break;
      case 'Olho':
        this.olhoName = this.categoriaName + '_color_' + color;
        this.engServ.olhoLoad(name, color);
        this.color = !this.color;
        break;
      case 'Nariz':
        this.narizName = this.categoriaName + '_color_' + color;
        this.engServ.narizLoad(name, color);
        this.color = !this.color;
        break;
      case 'Barba':
        this.barbaName = this.categoriaName + '_color_' + color;
        this.engServ.barbaLoad(name, color);
        this.color = !this.color;
        break;
      case 'Oculos':
        this.oculosName = this.categoriaName + '_color_' + color;
        this.engServ.oculosLoad(name, color);
        this.color = !this.color;
        break;
      case 'Calca':
        this.calcaName = this.categoriaName + '_color_' + color;
        this.engServ.calcaLoad(name, color);
        this.color = !this.color;
        break;
      case 'CabeloCurto':
        this.cabeloCurtoName = this.categoriaName + '_color_' + color;
        this.engServ.cabeloCurtoLoad(name, color);
        this.color = !this.color;
        break;
      case 'Orelha':
        this.orelhaName = this.categoriaName + '_color_' + color;
        this.engServ.orelhaLoad(name, color);
        this.color = !this.color;
        break;
      case 'Sobrancelha':
        this.sobrancelhaName = this.categoriaName + '_color_' + color;
        this.engServ.sobrancelhaLoad(name, color);
        this.color = !this.color;
        break;
      case 'Boca':
        this.bocaName = this.categoriaName + '_color_' + color;
        this.engServ.bocaLoad(name, color);
        this.color = !this.color;
        break;
      case 'Chapeu':
        this.chapeuName = this.categoriaName + '_color_' + color;
        this.engServ.chapeuLoad(name, color);
        this.color = !this.color;
        break;
      case 'Pinta':
        this.pintaName = this.categoriaName + '_color_' + color;
        this.engServ.pintaLoad(name, color);
        this.color = !this.color;
        break;
    }
  }

  refresh() {
    window.location.reload()
  }


}


/*trocarPorCategoriaLoad(_pathName, _color){
  this.loader.load('/assets/trocarPorCategoria/'+_pathName, geometry => {
    let material = new THREE.MeshBasicMaterial( { color: _color } );
    let obj = new THREE.Mesh( geometry, material );
    var box = new THREE.Box3().setFromObject( this.cabeca );
    obj.rotation.x = Math.PI / 2;
    obj.scale.set(1,1,1);
    this.trocarPorCategoria.add(obj);
  }, function () {}, function () {})
}*/

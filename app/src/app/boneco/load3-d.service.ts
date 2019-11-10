import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import {Scene} from "three";
import {STLLoader} from 'src/app/boneco/stlloader';
import * as $ from 'jquery/dist/jquery.min';
import { saveAs } from 'file-saver';
import {STLExporter} from "three/examples/jsm/exporters/STLExporter";




@Injectable({
  providedIn: 'root'
})
export class Load3DService implements OnDestroy {



  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  public scene = new Scene();
  private light: THREE.AmbientLight;
//  private loader = new STLLoader();
  private frameId: number = null;
  loader = new STLLoader();
  private exporter = new STLExporter();
  private exportSTL = new STLExporter();


  private cabeca: THREE.Mesh;
  private corpo: THREE.Mesh;

  private camisa: THREE.Mesh;
  private calca: THREE.Mesh;
  private tenis: THREE.Mesh;
  private meia: THREE.Mesh;
  private saia: THREE.Mesh;
  private cinto: THREE.Mesh;
  private gravata: THREE.Mesh;
  private cachecol: THREE.Mesh;
  private luva: THREE.Mesh;
  private relogio: THREE.Mesh;
  private segurando: THREE.Mesh;
  private vestido: THREE.Mesh;
  private formato: THREE.Mesh;
  private olho: THREE.Mesh;
  private nariz: THREE.Mesh;
  private barba: THREE.Mesh;
  private oculos: THREE.Mesh;
  private cabeloCurto: THREE.Mesh;
  private orelha: THREE.Mesh;
  private sobrancelha: THREE.Mesh;
  private boca: THREE.Mesh;
  private chapeu: THREE.Mesh;
  private pinta: THREE.Mesh;

  public constructor(private ngZone: NgZone) {}
  width = document.documentElement.clientWidth;
  public innerWidth: any;

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }



  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
        65, window.innerWidth / window.innerHeight, 1, 400
    );
    this.camera.position.z = 250;
    this.camera.position.y = 150;
    this.camera.type = "PerspectiveCamera";
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 10;
    this.scene.add(this.light);


    function toRadians(angle) {
      return angle * (Math.PI / 180);
    }


    this.loader.load('/assets/cabeca/Menina_cabeca.stl', geometry => {
      let material = new THREE.MeshBasicMaterial( { color: "#000000" } );
      this.cabeca = new THREE.Mesh( geometry, material );
      var box = new THREE.Box3().setFromObject( this.cabeca );
      this.cabeca.rotation.x = Math.PI;
      this.cabeca.rotation.y = Math.PI;
      this.cabeca.rotation.x = Math.PI / 2;
      this.cabeca.rotation.y = Math.PI;
      this.cabeca.position.setY(55);
      this.scene.add(this.cabeca);
    }, function () {}, function () {});
    this.loader.load('/assets/corpo/Menina_corpo.stl', geometry => {
      let material = new THREE.MeshBasicMaterial( { color: "#000000" } );
      this.corpo = new THREE.Mesh( geometry, material );
      var box = new THREE.Box3().setFromObject( this.corpo );
      this.corpo.rotation.x = Math.PI;
      this.corpo.rotation.y = Math.PI;
      this.corpo.rotation.x = Math.PI / 2;
      this.corpo.rotation.y = Math.PI;
      this.corpo.position.setY(55);
      this.scene.add(this.corpo);

    }, function () {}, function () {});


    let isMobile: boolean;
    isMobile = this.innerWidth <= 1000;
    console.log('É mobile: ' + isMobile);

    if (!isMobile) {
      console.log('!ismobile');
      let deltaRotationQuaternion = new THREE.Quaternion();
      let isDragging = false;
      let previousMousePosition = {
        x: 0,
        y: 0
      };
      $(this.renderer.domElement).on('touchstart', function(e) {
        previousMousePosition = {
          x: e.originalEvent.touches[0].clientX,
          y: e.originalEvent.touches[0].clientY
        };
        isDragging = true;
      })
          .on('touchmove', e => {
            let deltaMove = {
              x: e.originalEvent.touches[0].clientX-previousMousePosition.x,
              y: e.originalEvent.touches[0].clientY-previousMousePosition.y
            };
            if(isDragging) {
              deltaRotationQuaternion = new THREE.Quaternion()
                  .setFromEuler(new THREE.Euler(
                      toRadians(0),
                      toRadians(deltaMove.x * 0.05),
                      0,
                      'XYZ'
                  ));
              this.corpo.quaternion.multiplyQuaternions(deltaRotationQuaternion, this.corpo.quaternion);
              this.cabeca.quaternion.multiplyQuaternions(deltaRotationQuaternion, this.cabeca.quaternion);
            }
          });
      $(document).on('touchend', function() {
        isDragging = false;
      });
    } else {

      console.log('else');

      // --------------------------------- INICIO Mobile ----------------------------------------

      this.camera.position.x = 0;

      let deltaRotationQuaternion = new THREE.Quaternion();
      let isDragging = false;
      let previousMousePosition = {
        x: 0,
        y: 0
      };
      $(this.renderer.domElement).on('touchstart', function(e) {
        previousMousePosition = {
          x: e.originalEvent.touches[0].clientX,
          y: e.originalEvent.touches[0].clientY
        };
        isDragging = true;
      })
          .on('touchmove', e => {
            let deltaMove = {
              x: e.originalEvent.touches[0].clientX-previousMousePosition.x,
              y: e.originalEvent.touches[0].clientY-previousMousePosition.y
            };
            if(isDragging) {
              deltaRotationQuaternion = new THREE.Quaternion()
                  .setFromEuler(new THREE.Euler(
                      toRadians(0),
                      toRadians(deltaMove.x * 0.05),
                      0,
                      'XYZ'
                  ));
              this.cabeca.quaternion.multiplyQuaternions(deltaRotationQuaternion, this.cabeca.quaternion);
              this.corpo.quaternion.multiplyQuaternions(deltaRotationQuaternion, this.corpo.quaternion);
            }
          });
      $(document).on('touchend', function() {
        isDragging = false;
      });
    }

  }
  animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('DOMContentLoaded', () => {
        this.render();
      });

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }
  render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.renderer.render(this.scene, this.camera);
  }




  camisaLoad(_pathName, _color){
    this.loader.load('/assets/camisa/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.camisa = new THREE.Mesh( geometry, material );
      this.camisa.rotation.x = Math.PI / 2;
      this.corpo.add(this.camisa);
    }, function () {}, function () {})
  }




  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }



  exportCorpo( name, cor ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.corpo, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + cor + '.stl');
  }

  exportCabeca( name, cor ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.cabeca, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + cor + '.stl');
  }

  exportCalca( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.calca, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }

  exportBarba( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.barba, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportRelogio( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.relogio, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportCamisa( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.camisa, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportNariz( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.nariz, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportSegurando( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.segurando, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportTenis( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.tenis, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportVestido( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.vestido, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportSaia( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.saia, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportPinta( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.pinta, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportSobrancelha( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.sobrancelha, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportMeia( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.meia, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportLuva( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.luva, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportCinto( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.cinto, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportCachecol( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.cachecol, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportGravata( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.gravata, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportOculos( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.oculos, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportOlho( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.olho, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportChapeu( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.chapeu, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportCabeloCurto( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.cabeloCurto, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportBoca( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.boca, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportFormato( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.formato, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }
  exportOrelha( name ){
    const exporter = new STLExporter();
    const stlString = exporter.parse( this.orelha, {binary: true} );
    const blob = new Blob([stlString], {type: 'text/plain'});
    saveAs(blob, name + '.stl');
  }


  calcaLoad(_pathName, _color){
    this.loader.load('/assets/calca/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.calca = new THREE.Mesh( geometry, material );
      this.calca.rotation.x = Math.PI / 2;
      this.corpo.add(this.calca);
    }, function () {}, function () {})
  }

  tenisLoad(_pathName, _color){
    this.loader.load('/assets/tenis/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.tenis = new THREE.Mesh( geometry, material );
      this.tenis.rotation.x = Math.PI / 2;
      this.corpo.add(this.tenis);
    }, function () {}, function () {})
  }

  meiaLoad(_pathName, _color){
    this.loader.load('/assets/meia/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.meia = new THREE.Mesh( geometry, material );
      this.meia.rotation.x = Math.PI / 2;
      this.corpo.add(this.meia);
    }, function () {}, function () {})
  }

  saiaLoad(_pathName, _color){
    this.loader.load('/assets/saia/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.saia = new THREE.Mesh( geometry, material );
      this.saia.rotation.x = Math.PI / 2;
      this.corpo.add(this.saia);
    }, function () {}, function () {})
  }

  cintoLoad(_pathName, _color){
    this.loader.load('/assets/cinto/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.cinto = new THREE.Mesh( geometry, material );
      this.cinto.rotation.x = Math.PI / 2;
      this.corpo.add(this.cinto);
    }, function () {}, function () {})
  }

  gravataLoad(_pathName, _color){
    this.loader.load('/assets/gravata/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.gravata = new THREE.Mesh( geometry, material );
      var box = new THREE.Box3().setFromObject( this.cabeca );
      this.gravata.rotation.x = Math.PI / 2;
      this.corpo.add(this.gravata);
    }, function () {}, function () {})
  }

  cachecolLoad(_pathName, _color){
    this.loader.load('/assets/cachecol/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.cachecol = new THREE.Mesh( geometry, material );
      this.cachecol.rotation.x = Math.PI / 2;
      this.corpo.add(this.cachecol);
    }, function () {}, function () {})
  }

  luvaLoad(_pathName, _color){
    this.loader.load('/assets/luva/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.luva = new THREE.Mesh( geometry, material );
      this.luva.rotation.x = Math.PI / 2;
      this.corpo.add(this.luva);
    }, function () {}, function () {})
  }

  relogioLoad(_pathName, _color){
    this.loader.load('/assets/relogio/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.relogio = new THREE.Mesh( geometry, material );
      this.relogio.rotation.x = Math.PI / 2;
      this.corpo.add(this.relogio);
    }, function () {}, function () {})
  }

  segurandoLoad(_pathName, _color){
    this.loader.load('/assets/segurando/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.segurando = new THREE.Mesh( geometry, material );
      this.segurando.rotation.x = Math.PI / 2;
      this.corpo.add(this.segurando);
    }, function () {}, function () {})
  }

  vestidoLoad(_pathName, _color){
    this.loader.load('/assets/vestido/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.vestido = new THREE.Mesh( geometry, material );
      this.vestido.rotation.x = Math.PI / 2;
      this.corpo.add(this.vestido);
    }, function () {}, function () {})
  }

  formatoLoad(_pathName, _color){
    this.loader.load('/assets/formato/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.formato = new THREE.Mesh( geometry, material );
      this.formato.rotation.x = Math.PI / 2;
      this.corpo.add(this.formato);
    }, function () {}, function () {})
  }

  olhoLoad(_pathName, _color){
    this.loader.load('/assets/olho/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.olho = new THREE.Mesh( geometry, material );
      this.olho.rotation.x = Math.PI / 2;
      this.cabeca.add(this.olho);
    }, function () {}, function () {})
  }

  narizLoad(_pathName, _color){
    this.loader.load('/assets/nariz/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.nariz = new THREE.Mesh( geometry, material );
      this.nariz.rotation.x = Math.PI / 2;
      this.cabeca.add(this.nariz);
    }, function () {}, function () {})
  }

  barbaLoad(_pathName, _color){
    this.loader.load('/assets/barba/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.barba = new THREE.Mesh( geometry, material );
      this.barba.rotation.x = Math.PI / 2;
      this.cabeca.add(this.barba);
    }, function () {}, function () {})
  }

  oculosLoad(_pathName, _color){
    this.loader.load('/assets/oculos/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.oculos = new THREE.Mesh( geometry, material );
      this.oculos.rotation.x = Math.PI / 2;
      this.cabeca.add(this.oculos);
    }, function () {}, function () {})
  }

  cabeloCurtoLoad(_pathName, _color){
    this.loader.load('/assets/cabeloCurto/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.cabeloCurto = new THREE.Mesh( geometry, material );
      var box = new THREE.Box3().setFromObject( this.cabeca );
      this.cabeloCurto.rotation.x = Math.PI / 2;
      this.cabeca.add(this.cabeloCurto);
    }, function () {}, function () {})
  }

  orelhaLoad(_pathName, _color){
    this.loader.load('/assets/orelha/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.orelha = new THREE.Mesh( geometry, material );
      this.orelha.rotation.x = Math.PI / 2;
      this.cabeca.add(this.orelha);
    }, function () {}, function () {})
  }

  sobrancelhaLoad(_pathName, _color){
    this.loader.load('/assets/sobrancelha/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.sobrancelha = new THREE.Mesh( geometry, material );
      var box = new THREE.Box3().setFromObject( this.cabeca );
      this.sobrancelha.rotation.x = Math.PI / 2;
      this.cabeca.add(this.sobrancelha);
    }, function () {}, function () {})
  }

  bocaLoad(_pathName, _color){
    this.loader.load('/assets/boca/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.boca = new THREE.Mesh( geometry, material );
      this.boca.rotation.x = Math.PI / 2;
      this.cabeca.add(this.boca);
    }, function () {}, function () {})
  }

  chapeuLoad(_pathName, _color){
    this.loader.load('/assets/chapeu/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.chapeu = new THREE.Mesh( geometry, material );
      this.chapeu.rotation.x = Math.PI / 2;
      this.cabeca.add(this.chapeu);
    }, function () {}, function () {})
  }

  pintaLoad(_pathName, _color){
    this.loader.load('/assets/pinta/'+_pathName, geometry => {
      let material = new THREE.MeshBasicMaterial( { color: _color } );
      this.pinta = new THREE.Mesh( geometry, material );
      this.pinta.rotation.x = Math.PI / 2;
      this.cabeca.add(this.pinta);
    }, function () {}, function () {})
  }

}


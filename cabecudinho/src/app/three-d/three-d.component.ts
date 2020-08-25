import { Component, Input, OnInit } from '@angular/core';
import * as THREE from 'three';
import {STLLoader} from "./stlloader";
import * as $ from 'jquery/dist/jquery.min.js';

import {
  Object3D,
  PerspectiveCamera,
  Scene,
  Mesh,
  WebGLRenderer,
  Vector3,
  SpotLight,
  MeshLambertMaterial,
  Color,
} from "three"


@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss'],
})
export class ThreeDComponent implements OnInit {

  _stlURL: string;

  @Input()
  set stlURL(url: string) {
    this._stlURL = url;
    this.init3D();
  }

  ionViewDidLoad(){
    this.init3D();
  }

  constructor() {}

  ngOnInit() {}


  init3D() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    let scene = new Scene();

    scene.background = new THREE.Color( 'white' );

    scene.overrideMaterial = new THREE.MeshBasicMaterial( { color: 'blue' } );

    // create a camera, which defines where we're looking at.
    let camera = new PerspectiveCamera( 80, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.z = 150;
    camera.position.y = 0;


    // create a render and set the size
    let renderer = new WebGLRenderer();
    renderer.setClearColor(new Color('black'));
    renderer.setSize( window.innerWidth/3, ((window.innerHeight/2) * 1.25) );
    renderer.shadowMapEnabled = true;


    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);
    console.log("Starting 3D");

    // call the render function
    let step = 0;

    // model from http://www.thingiverse.com/thing:69709
    let loader = new STLLoader();


    let boneco = null;
    let calca = null;

    loader.load('../../assets/menina_testes/menina_roupa_basica_low.stl', function (geometry) {


      var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

      boneco = new THREE.Mesh( geometry, material );

      var box = new THREE.Box3().setFromObject( boneco );
     // console.log( box.min, box.max, box.getSize(1) );

      boneco.rotation.x = Math.PI;
      boneco.rotation.y = Math.PI;


      boneco.geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -27.8, 0, 0 ) );
      // -32 ombro esquerdo
      // -64 totalmente à esquerda
      // -27,8 acabou sendo o certo, era exatamente box.max.x /2 sla vei

      boneco.scale.set(1,1,1);

      scene.add(boneco);

      // calça
      loader.load('../../assets/calca_menina_low.stl', function (geometry) {

        var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

        calca = new THREE.Mesh( geometry, material );

        // calca.rotation.x = Math.PI;
        // calca.rotation.y = Math.PI;

        // calca.geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -41, 0, -41 ) );


        boneco.add(calca);
      }, function(){}, function(){});
      // calça

    }, function(){}, function(){});




    function LoadObj(path){
      let this_obj = null


      loader.load( path, function (geometry) {

        var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

        this_obj = new THREE.Mesh( geometry, material );

        this_obj.rotation.x = Math.PI;
        this_obj.rotation.y = Math.PI;

        this_obj.geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -41, 0, -41 ) );


        scene.add(this_obj);
      }, function(){}, function(){});
    }

    // LoadObj('../../assets/calca_menina_low.stl');
    // LoadObj('../../assets/manga_comprida_low.stl');
    // LoadObj('../../assets/menina_testes/menina_roupa_basica_low.stl');


    render();

    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }



    var isMobile = false;

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isMobile = true;
      }

      console.log("É mobile: " + isMobile)


    if (!isMobile){
      let isDragging = true;
      var previousMousePosition = {
        x: 0,
        y: 0
      };
      $(renderer.domElement).on('mousedown', function(e) {
        isDragging = true;
      })
      .on('mousemove', function(e) {
        var deltaMove = {
          x: e.offsetX-previousMousePosition.x,
          y: e.offsetY-previousMousePosition.y
        };

        if(isDragging) {

          var deltaRotationQuaternion = new THREE.Quaternion()
          .setFromEuler(new THREE.Euler(
            toRadians(deltaMove.y * 0),
            toRadians(deltaMove.x * 0.25),
            0,
            'XYZ'
          ));

          boneco.quaternion.multiplyQuaternions(deltaRotationQuaternion, boneco.quaternion);
        }

        previousMousePosition = {
          x: e.offsetX,
          y: e.offsetY
        };
      });

      $(document).on('mouseup', function(e) {
        isDragging = false;
      });
    }else{
      // Mobile

      var deltaRotationQuaternion = new THREE.Quaternion();

      let isDragging = false;
      var previousMousePosition = {
        x: 0,
        y: 0
      };
      $(renderer.domElement).on('touchstart', function(e) {
        previousMousePosition = {
          x: e.originalEvent.touches[0].clientX,
          y: e.originalEvent.touches[0].clientY
        };

        isDragging = true;
      })
      .on('touchmove', function(e) {
        var deltaMove = {
          x: e.originalEvent.touches[0].clientX-previousMousePosition.x,
          y: e.originalEvent.touches[0].clientY-previousMousePosition.y
        };



        if(isDragging) {

          deltaRotationQuaternion = new THREE.Quaternion()
          .setFromEuler(new THREE.Euler(
            toRadians(deltaMove.y * 0),
            toRadians(deltaMove.x * 0.05),
            0,
            'XYZ'
          ));

          boneco.quaternion.multiplyQuaternions(deltaRotationQuaternion, boneco.quaternion);
        }


      });

      $(document).on('touchend', function(e) {
        isDragging = false;
      });

    }

    function toRadians(angle) {
      return angle * (Math.PI / 180);
    }

    function toDegrees(angle) {
      return angle * (180 / Math.PI);
    }




    $(document).keypress(function(e){
      if(e.key === "f"){

        let new_obj = null;

        // calça
        loader.load('../../assets/calca_menina_low.stl', function (geometry) {

          var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

          new_obj = new THREE.Mesh( geometry, material );

          new_obj.rotation.x = Math.PI;
          new_obj.rotation.y = Math.PI;

          new_obj.geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -41, 0, -41 ) );

          boneco.add(new_obj);

          console.log(boneco)


        }, function(){}, function(){});
        // calça

      }
    });

  }
}

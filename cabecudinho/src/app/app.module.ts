import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// main components

import { LoginComponent } from "./login/login.component";
import { ListarBonecosComponent } from "./listar-bonecos/listar-bonecos.component";
import { PagamentoComponent } from "./pagamento/pagamento.component";

// jwt
import { JwtHelperService } from '@auth0/angular-jwt';

// sub components

import { ExibirBonecoComponent } from "./listar-bonecos/exibir-boneco/exibir-boneco.component";
import { CadastroComponent } from "./login/cadastro/cadastro.component";
import { EsqueciSenhaComponent } from "./login/esqueci-senha/esqueci-senha.component";
import { CadastroPagamentoComponent } from "./pagamento/cadastro-pagamento/cadastro-pagamento.component";
import { PagarComponent } from "./pagamento/pagar/pagar.component";
// listar
import { ListarBonecoDesktopComponent } from "./listar-bonecos/listar-boneco-desktop/listar-boneco-desktop.component";
import { ListarBonecoMobileComponent } from "./listar-bonecos/listar-boneco-mobile/listar-boneco-mobile.component";
import { FuncaoListarBonecoComponent } from "./listar-bonecos/funcao-listar-boneco/funcao-listar-boneco.component";
import { NewBonecoComponent } from "./listar-bonecos/new-boneco/new-boneco.component";
import { AcessoriosComponent } from "./listar-bonecos/acessorios/acessorios.component";
// login
import { LoginDesktopComponent } from "./login/login-desktop/login-desktop.component";
import { LoginMobileComponent } from "./login/login-mobile/login-mobile.component";
import { FuncaoLoginComponent } from "./login/funcao-login/funcao-login.component";
import { ThreeDComponent } from "./three-d/three-d.component";
import {AuthInterceptor} from "./login/auth/auth-interceptor";
import {AuthService} from "./login/auth/auth.service";



@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      ListarBonecosComponent,
      PagamentoComponent,
      ExibirBonecoComponent,
      CadastroComponent,
      EsqueciSenhaComponent,
      CadastroPagamentoComponent,
      PagarComponent,
      ListarBonecoDesktopComponent,
      ListarBonecoMobileComponent,
      FuncaoListarBonecoComponent,
      LoginDesktopComponent,
      LoginMobileComponent,
      FuncaoLoginComponent,
      ThreeDComponent,
      NewBonecoComponent,
      AcessoriosComponent

  ],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
      AuthService,
      JwtHelperService,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

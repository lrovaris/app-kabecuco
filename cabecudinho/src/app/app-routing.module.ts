import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { ListarBonecosComponent } from "./listar-bonecos/listar-bonecos.component";
import { PagamentoComponent } from "./pagamento/pagamento.component";
import { NewBonecoComponent } from "./listar-bonecos/new-boneco/new-boneco.component";
import { CadastroComponent } from "./login/cadastro/cadastro.component";
import { EsqueciSenhaComponent } from "./login/esqueci-senha/esqueci-senha.component";
import { FuncaoLoginComponent } from "./login/funcao-login/funcao-login.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, children: [
      { path: 'f-login', component: FuncaoLoginComponent}
    ] },
  { path: 'listar', component: ListarBonecosComponent },
  { path: 'pagar', component: PagamentoComponent },
  { path: 'novo', component: NewBonecoComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'esqueci', component: EsqueciSenhaComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

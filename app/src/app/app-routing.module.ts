import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BonecoComponent } from "./boneco/boneco.component";

const routes: Routes = [
  { path: '', redirectTo: 'novo', pathMatch: 'full' },
  { path: 'novo', component: BonecoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

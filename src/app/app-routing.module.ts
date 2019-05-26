import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApayaComponent } from './app/apaya/apaya.component';

const routes: Routes = [
  {
    path : 'apaya',
    component : ApayaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

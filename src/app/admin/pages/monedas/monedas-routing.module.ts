import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonedasModule } from './monedas.module';

const routes: Routes = [
  {
  path:"",
  component:MonedasModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonedasRoutingModule { }

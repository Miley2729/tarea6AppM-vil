import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisPage } from './pais.page';

const routes: Routes = [
  {
    path: '',
    component: PaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisPageRoutingModule {}

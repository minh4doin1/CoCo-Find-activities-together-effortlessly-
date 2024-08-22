import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartedPage } from './started.page';

const routes: Routes = [
  {
    path: '',
    component: StartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class StartedPageRoutingModule {}

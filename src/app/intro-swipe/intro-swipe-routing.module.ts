import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroSwipePage } from './intro-swipe.page';

const routes: Routes = [
  {
    path: '',
    component: IntroSwipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroSwipePageRoutingModule {}

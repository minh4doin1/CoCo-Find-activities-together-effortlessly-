import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroSwipePageRoutingModule } from './intro-swipe-routing.module';

import { IntroSwipePage } from './intro-swipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroSwipePageRoutingModule
  ],
  declarations: [IntroSwipePage]
})
export class IntroSwipePageModule {}

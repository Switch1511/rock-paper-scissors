import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { GameModule } from '../game/game.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    GameModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

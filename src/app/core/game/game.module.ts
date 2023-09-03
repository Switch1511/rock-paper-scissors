import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';

import {
  FooterModule,
  HeaderModule,
  ModalRulesModule,
  PlayModule
} from '../shared';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    ModalRulesModule,
    PlayModule
  ]
})
export class GameModule { }

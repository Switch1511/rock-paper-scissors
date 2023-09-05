import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';

import { FooterModule } from '../footer/footer.module';

import { PlayModule } from '../play/play.module';

import { ModalRulesModule } from '../modal-rules/modal-rules.module';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    ModalRulesModule,
    PlayModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }

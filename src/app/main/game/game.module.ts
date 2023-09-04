import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';

import { FooterModule } from '../footer/footer.module';

import { HeaderModule } from '../header/header.module';

import { PlayModule } from '../play/play.module';

import { ModalRulesModule } from '../modal-rules/modal-rules.module';

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
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }

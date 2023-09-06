import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ScoreComponent } from './score.component';

import { FooterModule } from '../footer/footer.module';

import { PlayModule } from '../play/play.module';

import { ModalRulesModule } from '../modal-rules/modal-rules.module';

@NgModule({
  declarations: [
    ScoreComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    ModalRulesModule,
    PlayModule
  ],
  exports: [
    ScoreComponent
  ]
})
export class ScoreModule { }

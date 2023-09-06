import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ScoreModule } from './score/score.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScoreModule
  ],
  exports: [
    ScoreModule
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { ScoreModule } from '../score/score.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ScoreModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

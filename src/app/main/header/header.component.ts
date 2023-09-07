import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/shared/services/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scorePlayer: number = 0;
  scoreComputer: number = 0;

  countPlayer: boolean = false;
  countComputer: boolean = false;

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    this.scoreService.getData().subscribe(async (data: any) => {

      this.scorePlayer < data.scorePlayer ? this.countPlayer = true : ''
      this.scoreComputer < data.scoreComputer ? this.countComputer = true : ''

      this.scorePlayer = data.scorePlayer;
      this.scoreComputer = data.scoreComputer;

      await sleep(1000);

      this.countPlayer = false;
      this.countComputer = false;
    });
  }

}

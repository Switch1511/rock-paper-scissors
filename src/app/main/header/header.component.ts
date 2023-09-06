import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/shared/services/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scorePlayer?: number;
  scoreComputer?: number;

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scorePlayer = 0;
    this.scoreComputer = 0;

    this.scoreService.getData().subscribe((data: any) => {
      console.log(data)
      this.scorePlayer = data.scorePlayer;
      this.scoreComputer = data.scoreComputer;
    });
  }

}

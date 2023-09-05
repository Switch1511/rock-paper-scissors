import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/shared/services/score.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  receivedData: number = 0;

  constructor(private dataService: ScoreService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.receivedData = data;
    });
  }

}

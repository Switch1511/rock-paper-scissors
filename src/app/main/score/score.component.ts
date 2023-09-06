import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/shared/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  receivedData: number = 0;

  constructor(private dataService: ScoreService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.receivedData = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/shared/services/score.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  botImage?: string;
  images: any
  play: boolean = false;
  moveBot: number = 0;
  movePlayer?: number;
  scorePlayer: number = 0;
  scoreComputer: number = 0;

  constructor( private dataService: ScoreService ) { }

  ngOnInit(): void {
    this.images = [
      {
        id: 0,
        img: 'https://cdn-icons-png.flaticon.com/512/3172/3172747.png'
      },
      {
        id: 1,
        img: 'https://images.vexels.com/media/users/3/145640/isolated/preview/a280e39f92cd30cd6181f08b1f4dca6b-earth-stone-rock-stone.png'
      },
      {
        id: 2,
        img: 'https://cdn-icons-png.flaticon.com/512/4229/4229057.png'
      }
    ]

    this.randomImg();
  }

  async randomImg(){
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    for(let i = 0 ; this.play == false; i++){
      this.play == false ? this.botImage = this.images[i].img : ''
      i == 2 ? i = -1 : i = i;
      await sleep(100);
    }

    await sleep(1500);
    this.reload();
  }

  toPlay(i: number){
    if(!this.play){
    this.play = true;
    this.movePlayer = i;
    console.log(this.movePlayer)
    this.moveBot = Math.floor(Math.random() * 3);

    this.botImage = this.images[this.moveBot].img

    if(this.movePlayer == this.moveBot){

    } else if (this.movePlayer == 0 && this.moveBot == 1){
      this.scorePlayer ++
    } else if (this.movePlayer == 1 && this.moveBot == 2){
      this.scorePlayer ++
    } else if (this.movePlayer == 2 && this.moveBot == 0){
      this.scorePlayer ++
    } else {
      this.scoreComputer ++
    }

    this.dataService.setData(this.scorePlayer, this.scoreComputer);
    }
  }

  reload(){
    this.play = false;
    this.movePlayer = undefined;
    this.randomImg();
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private dataSubject = new ReplaySubject();

  setData(scorePlayer: number, scoreComputer: number) {
    this.dataSubject.next({scorePlayer, scoreComputer});
  }

  getData() {
    return this.dataSubject.asObservable();
  }

}

import { Injectable } from '@angular/core';
import { Timer } from '../model/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  timeList: Timer[] = [];

  add(time: Timer) {
    this.timeList.push(time);
  }

}

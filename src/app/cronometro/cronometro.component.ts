import { TimerService } from './services/timer.service';
import { Timer } from './model/timer';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit, OnDestroy {

  laps: any = [];
  timeLeft: number = 0;
  interval: any;

  minutes: any = '00';
  seconds: any = '00';
  milliseconds: any = '00';

  constructor(public timer: TimerService) { }

  ngOnDestroy(): void {
    this.pause();
  }

  ngOnInit(): void {
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.timeLeft++;
      }, 100);
    }
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  marcarVolta() {
    this.laps.push(this.timeLeft);
    console.log(this.timeLeft);
  }

}

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

  totalLaps: number = this.laps.length;
  hideStart: boolean = false;
  hidePause: boolean = false;
  hideResume: boolean = false;
  hideReset: boolean = false;
  hideLaps: boolean = false;
  titleLaps: boolean = false;
  displayLaps: string = '';

  minutes: any = '00';
  seconds: any = '00';
  milliseconds: any = '00';

  constructor(public ts: TimerService) { }

  ngOnDestroy(): void {
    this.pause();
  }

  ngOnInit(): void {
    this.hideStart = true;
    this.hideResume = true;
    this.hidePause = true;
    this.hideReset = true;
    this.hideLaps = true;
    this.titleLaps = true;
    this.displayLaps = 'none';

  }

  start() {
    if (!this.interval) {
      this.hideStart = false;
      this.hidePause = false;
      this.hideResume = true;
      this.hideReset = true;
      this.hideLaps = false;
      this.interval = setInterval(() => {
        this.timeLeft++;
      }, 100);
    }
  }

  pause() {
    if (this.interval) {
      this.hideResume = false;
      this.hidePause = true;
      this.hideReset = false;
      this.hideLaps = true;
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  reset() {
    this.hideStart = true;
    this.hideReset = true;
    this.hideResume = true;
    this.hideLaps = true;
    this.timeLeft = 0;
    this.titleLaps = true;
    this.displayLaps = 'none';
    this.laps = [];
  }

  markLap() {
    this.titleLaps = false;
    this.displayLaps = 'inline-block';
    this.laps.push(this.timeLeft);
  }

}

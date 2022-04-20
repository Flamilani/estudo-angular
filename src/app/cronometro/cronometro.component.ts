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

  hideIniciar: boolean = false;
  hidePausar: boolean = false;
  hideRetomar: boolean = false;
  hideReiniciar: boolean = false;
  hideVolta: boolean = false;

  minutes: any = '00';
  seconds: any = '00';
  milliseconds: any = '00';

  constructor(public ts: TimerService) { }

  ngOnDestroy(): void {
    this.pause();
  }

  ngOnInit(): void {
    this.hideIniciar = true;
    this.hideRetomar = true;
    this.hidePausar = true;
    this.hideReiniciar = true;
    this.hideVolta = true;
  }

  start() {
    if (!this.interval) {
      this.hideIniciar = false;
      this.hidePausar = false;
      this.hideRetomar = true;
      this.hideReiniciar = true;
      this.hideVolta = false;
      this.interval = setInterval(() => {
        this.timeLeft++;
      }, 100);
    }
  }

  pause() {
    if (this.interval) {
      this.hideRetomar = false;
      this.hidePausar = true;
      this.hideReiniciar = false;
      this.hideVolta = true;
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  reset() {
    this.hideIniciar = true;
    this.hideReiniciar = true;
    this.hideRetomar = true;
    this.hideVolta = true;
    this.timeLeft = 0;
    this.laps = [];
  }

  marcarVolta() {
    this.laps.push(this.timeLeft);
  }

}

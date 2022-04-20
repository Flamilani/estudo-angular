import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatTimePipe } from './cronometro/pipes/format-time.pipe';
import { ReversePipe } from './cronometro/pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
    FormatTimePipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

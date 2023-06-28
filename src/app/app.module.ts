import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserActiveComponent } from './user-active/user-active.component';
import { MenuActiveComponent } from './menu-active/menu-active.component';
import { FormsModule } from '@angular/forms';
import { TrainM1Component } from './event-components/train-mode-1/train-m1.component';
import { TrainM2Component } from './event-components/train-mode-2/train-m2/train-m2.component';
import { TrainM3Component } from './event-components/train-mode-3/train-m3/train-m3.component';
@NgModule({
  declarations: [
    AppComponent,
    UserActiveComponent,
    MenuActiveComponent,
    TrainM1Component,
    TrainM2Component,
    TrainM3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

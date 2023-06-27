import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserActiveComponent } from './user-active/user-active.component';
import { MenuActiveComponent } from './menu-active/menu-active.component';
import { FormsModule } from '@angular/forms';
import { TrainActiveComponent } from './train-active/train-active.component';
@NgModule({
  declarations: [
    AppComponent,
    UserActiveComponent,
    MenuActiveComponent,
    TrainActiveComponent
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

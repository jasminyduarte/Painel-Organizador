import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*material angular*/
import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

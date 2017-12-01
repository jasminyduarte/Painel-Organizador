import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SlideComponent } from './componentes/slide/slide.component';
import { FerramentasComponent } from './componentes/ferramentas/ferramentas.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { CardLoginComponent } from './componentes/card-login/card-login.component';
import { TiposEventComponent } from './componentes/tipos-event/tipos-event.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TabsDesktopComponent } from './componentes/tabs-desktop/tabs-desktop.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideComponent,
    FerramentasComponent,
    TabsComponent,
    CardLoginComponent,
    TiposEventComponent,
    FooterComponent,
    TabsDesktopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

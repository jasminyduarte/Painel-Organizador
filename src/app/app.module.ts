import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { SlideComponent } from './componentes/slide/slide.component';
import { FerramentasComponent } from './componentes/ferramentas/ferramentas.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { CardLoginComponent } from './componentes/card-login/card-login.component';
import { TiposEventComponent } from './componentes/tipos-event/tipos-event.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TabsDesktopComponent } from './componentes/tabs-desktop/tabs-desktop.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule, MatInputModule, MatFormFieldModule} from '@angular/material';





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
    TabsDesktopComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatMenuModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

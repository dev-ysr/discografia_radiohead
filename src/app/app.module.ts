import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DiscosService } from './services/discos.service';



// ROUTES
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DiscosComponent } from './components/discos/discos.component';
import { CardDiscoComponent } from './components/shared/card-disco/card-disco.component';
import { DiscoComponent } from './components/disco/disco.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DiscosComponent,
    CardDiscoComponent,
    DiscoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    DiscosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

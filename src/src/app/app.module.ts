import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './Components/splash/splash.component';
import {AuthenticationModule } from '../app/Modules/authentication/authentication.module';
import { HeaderComponent } from './Components/header/header.component'
import { TicTacToeModule } from './Modules/tic-tac-toe/tic-tac-toe.module'
import { GameService } from '../app/Services/game.service'
@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HeaderComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    TicTacToeModule
    
  ],
  providers: [GameService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

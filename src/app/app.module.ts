import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './Components/splash/splash.component';
import {AuthenticationModule } from '../app/Modules/authentication/authentication.module';
import { TicTacToeModule } from './Modules/tic-tac-toe/tic-tac-toe.module'
import { GameService } from '../app/Services/game.service';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    TicTacToeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [GameService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

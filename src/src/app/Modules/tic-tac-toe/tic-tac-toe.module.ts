import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { PreviousRecordComponent } from './previous-record/previous-record.component';


@NgModule({
  declarations: [
    TicTacToeComponent,
    PreviousRecordComponent,
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule
  ]
})
export class TicTacToeModule { }

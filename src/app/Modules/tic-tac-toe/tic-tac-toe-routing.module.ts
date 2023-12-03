import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { PreviousRecordComponent } from './previous-record/previous-record.component';

const routes: Routes = [
  { path: '', pathMatch : 'full', component: TicTacToeComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'previous-record', component: PreviousRecordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  history: { player: string; board: (null | "x" | "o")[]; winner?: string | undefined }[] = [];

  addMove(player: string, board: (null | "x" | "o")[], winner?: string) {
    this.history.push({ player, board, winner });
  }

  getHistory(): { player: string, board: (null | "x" | "o")[], winner?: string }[] {
    return this.history;
  }
}

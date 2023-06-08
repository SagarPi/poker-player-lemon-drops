import {GameState} from "./types/GameState";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    console.log("LEMON_DROPS: betRequest: ", {gameState});
    betCallback(0);
  }

  public showdown(gameState: any): void {
    console.log("LEMON_DROPS: showdown: ", {gameState});
  }
};

export default Player;

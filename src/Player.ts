import {GameState} from "./types/GameState";

export interface Suits {
  spades: any[];
  hearts: any[];
  clubs: any[];
  diamonds: any[];
}

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    console.log("LEMON_DROPS: betRequest: ", {gameState});
    const suits: Suits = {
      "spades": [],
      "hearts": [],
      "clubs": [],
      "diamonds": []
    };

    const player = gameState.players[gameState.in_action];
    const holeCards = player?.hole_cards;

    if (holeCards) {
      holeCards.forEach((card) => {
        suits[card.suit].push(card);
      });
    }

    const communityCards = gameState?.community_cards;
    if (communityCards) {
      communityCards.forEach((card) => {
        suits[card.suit].push(card);
      });
    }

    console.log('LEMON_DROPS cards: ', suits);

    betCallback(100);
  }

  public showdown(gameState: any): void {
    console.log("LEMON_DROPS: showdown: ", {gameState});
  }
};

export default Player;

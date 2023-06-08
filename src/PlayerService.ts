import {Card, GameState, Suits} from "./types/GameState";

export class PlayerService {
    public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
        console.log("LEMON_DROPS: betRequest: ", {gameState});
        
        // Maps J, Q, K, A to 11, 12, 13, 14
        const cardValueMap: Record<string, number> = {
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7,
          "8": 8,
          "9": 9,
          "10": 10,
          "J": 11,
          "Q": 12,
          "K": 13,
          "A": 14,
      };

      const allCardsInHand: Card[] = [];

      const player = gameState.players[gameState.in_action];
      const holeCards = player?.hole_cards;

      if (holeCards) {
          holeCards.forEach((card) => {
              allCardsInHand.push({ rank: cardValueMap[card.rank], suit: card.suit });
          });
      }

      const communityCards = gameState?.community_cards;
      if (communityCards) {
          communityCards.forEach((card) => {
            allCardsInHand.push({ rank: cardValueMap[card.rank], suit: card.suit });
          });
      }

      const sortedCards = allCardsInHand.sort((a, b) => a.rank - b.rank);
      console.log('Sorted Cards', sortedCards);

      betCallback(gameState.minimum_raise);
    }

    public showdown(gameState: any): void {
        console.log("LEMON_DROPS: showdown: ", {gameState});
    }
}

export default PlayerService;

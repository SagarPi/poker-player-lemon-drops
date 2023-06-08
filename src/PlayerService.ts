import { Card,GameState,Suits } from "./types/GameState";
import { HighCardService } from "./HighCardService";
import PairService from "./PairService";
import { SequenceService } from "./SequenceService";

export class PlayerService {
    public betRequest(gameState: GameState,betCallback: (bet: number) => void): void {
        console.log("LEMON_DROPS: betRequest: ",{ gameState });

        let raise = gameState.minimum_raise;
        try {
            // Maps J, Q, K, A to 11, 12, 13, 14
            const cardValueMap: Record<string,number> = {
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
                    allCardsInHand.push({ rank: cardValueMap[card.rank],suit: card.suit });
                });
            }

            const communityCards = gameState?.community_cards;
            if (communityCards) {
                communityCards.forEach((card) => {
                    allCardsInHand.push({ rank: cardValueMap[card.rank],suit: card.suit });
                });
            }

            const sortedCards = allCardsInHand.sort((a,b) => a.rank - b.rank);
            console.log('Sorted Cards',sortedCards);

            raise = HighCardService(sortedCards)
                + new PairService().getPairBetAmount(sortedCards)
                + SequenceService(sortedCards);

        } catch (error) {
            console.log(error);
        }
        betCallback(raise);
    }

    public showdown(gameState: any): void {
        console.log("LEMON_DROPS: showdown: ",{ gameState });
    }
}

export default PlayerService;

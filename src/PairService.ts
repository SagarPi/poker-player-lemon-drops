import {Card} from "./types/GameState";

export class PairService {

    public getPairBetAmount(cards: Card[]) {
        let betAmount = 0;
        const pairs: number = this.howManyPairs(cards);
        if(pairs > 1) {
          betAmount = betAmount + 30;
        } else if(pairs > 0) {
          betAmount = betAmount + 20;
        }
        return betAmount;
    }

    howManyPairs(cards: Card[]): number {
        let pairCount = 0;
        const ranksMap = new Map();
        cards.forEach(card => {
            if(ranksMap.has(card.rank)) {
                ranksMap.set(card.rank, ranksMap.get(card.rank) + 1);
            } else {
                ranksMap.set(card.rank, 1);
            }
        });
        Array.from(ranksMap.values())
            .forEach(value => {
                if(value > 1) {
                    pairCount++;
                }
            })
        return pairCount;
    }
}

export default PairService;
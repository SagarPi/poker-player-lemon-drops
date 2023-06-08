import {Card} from "./types/GameState";

export const HighCardService = (sortedCards: Card[]): number => {
    return sortedCards.pop().rank
}

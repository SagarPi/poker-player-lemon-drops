import {Card} from "./types/GameState";
import Utils from "./Utils";

export const SequenceService = (card: Card[]): number => {
    const ranks = card.map(card => card.rank);
    const doiHaveSequence = new Utils().isSequence(ranks);
    console.log('doiHaveSequence', doiHaveSequence);
    return doiHaveSequence ? 50 : 0;
}
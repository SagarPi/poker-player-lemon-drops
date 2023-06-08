import {Card, GameState} from "./types/GameState";

interface Suits {
    spades: any[];
    hearts: any[];
    clubs: any[];
    diamonds: any[];
}

const sort = (gameState: GameState) => {
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
    return suits;
}

export const SequenceService = (cards: Card[]): number => {
    return 1;
}

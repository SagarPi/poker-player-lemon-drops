import {Card, Suits} from "../types/GameState";
import {HighCardService} from "../HighCardService";

describe("High card service", () => {
    it.each([
        [[{rank: 1, suit: Suits.SPADES}], 1],
        [[{rank: 14, suit: Suits.SPADES}], 14],
        [[{rank: 1, suit: Suits.SPADES}, {rank: 14, suit: Suits.SPADES}], 14],
    ])("get max card number", (sortedCards: Card[], expectedValue: number) => {
        expect(HighCardService(sortedCards)).toEqual(expectedValue)
    });
})

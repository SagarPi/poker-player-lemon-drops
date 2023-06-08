import PlayerService from "../PlayerService";
import {Card, GameState, Player, Suits} from "../types/GameState";

describe("test", () => {
    it("server never ", () => {
        const betCallback = jest.fn();
        const minRaise = 10;
        const mockGameState: GameState = {
                tournament_id: "string",
                game_id: "string",
                round: 1,
                players: [],
                small_blind: 1,
                big_blind: 1,
                orbits: 1,
                dealer: 1,
                community_cards: [{rank: "2", suit: Suits.CLUBS}],
                current_buy_in: 1,
                pot: 1,
                in_action: 1,
                minimum_raise: 1,
                bet_index: 1,
            };
        new PlayerService().betRequest({...mockGameState, minimum_raise: minRaise}, betCallback);
        expect(betCallback).toHaveBeenCalledTimes(1)
    });
})

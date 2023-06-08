import {GameState} from "./types/GameState";

export class PlayerService {
    public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
        console.log("LEMON_DROPS: betRequest: ", {gameState});
        betCallback(gameState.minimum_raise);
    }


    public showdown(gameState: any): void {
        console.log("LEMON_DROPS: showdown: ", {gameState});
    }
}

export default PlayerService;

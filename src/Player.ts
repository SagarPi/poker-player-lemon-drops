export class Player {
  public betRequest(gameState: any, betCallback: (bet: number) => void): void {
    console.log("LEMON_DROPS: betRequest: ", {gameState});
    betCallback(0);
  }

  public showdown(gameState: any): void {
    console.log("LEMON_DROPS: showdown: ", {gameState});
  }
};

export default Player;

import { Card, Suits} from "../types/GameState";
import PairService from "../PairService";

describe("PairService", () => {
  let pairService: PairService;

  beforeEach(() => {
    pairService = new PairService();
  });

  test("should return 0 when no pairs are present", () => {
    const cards: Card[] = [
      { rank: 2, suit: Suits.CLUBS },
      { rank: 3, suit: Suits.HEARTS },
    ];
    const pairCount = pairService.howManyPairs(cards);
    expect(pairCount).toBe(0);
  });

  test("should return the correct number of pairs", () => {
    const cards: Card[] = [
        { rank: 2, suit: Suits.CLUBS },
        { rank: 3, suit: Suits.HEARTS },
        { rank: 2, suit: Suits.DIAMONDS },
      ];
    const pairCount = pairService.howManyPairs(cards);
    expect(pairCount).toBe(1);
  });

  test("should return the correct number of pairs 2", () => {
    const cards: Card[] = [
        { rank: 2, suit: Suits.CLUBS },
        { rank: 3, suit: Suits.HEARTS },
        { rank: 2, suit: Suits.DIAMONDS },
        { rank: 9, suit: Suits.CLUBS },
        { rank: 3, suit: Suits.HEARTS },
        { rank: 7, suit: Suits.DIAMONDS },
      ];
    const pairCount = pairService.howManyPairs(cards);
    expect(pairCount).toBe(2);
  });

});

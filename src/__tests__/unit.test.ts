import PlayerService from "../PlayerService";

describe("test", () => {
    it("server never ", () => {
        const betCallback = jest.fn();
        const minRaise = 10;
        // @ts-ignore
        // new PlayerService().betRequest({minimum_raise: minRaise}, betCallback);
        // expect(betCallback).toHaveBeenCalledTimes(1)
        // expect(betCallback).toHaveBeenCalledWith(minRaise)
    });
})

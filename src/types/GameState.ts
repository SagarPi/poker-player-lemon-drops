export interface PostRequestBody {
    action: string
    game_state: GameState
}

export interface GameState {
    tournament_id: string
    game_id: string
    round: number
    players: Player[]
    small_blind: number
    big_blind: number
    orbits: number
    dealer: number
    community_cards: HoleCard[]
    current_buy_in: number
    pot: number
    in_action: number
    minimum_raise: number
    bet_index: number
}

export interface Player {
    name: string
    stack: number
    status: string
    bet: number
    time_used: number
    version: string
    id: number
    hole_cards?: HoleCard[]
}

export interface HoleCard {
    rank: string
    suit: Suits
}

export enum Suits {
    SPADES = "spades",
    HEARTS = "hearts",
    CLUBS = "clubs",
    DIAMONDS = "diamonds"
}

export interface Card {
    rank: number
    suit: Suits
}

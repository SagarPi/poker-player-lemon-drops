
export interface GameState {
    players: PlayerState[]
    tournament_id: string
    game_id: string
    round: number
    bet_index: number
    small_blind: number
    orbits: number
    dealer: number
    community_cards: any[]
    current_buy_in: number
    pot: number
}

export interface PlayerState {
    name: string
    stack: number
    status: string
    bet: number
    hole_cards: any[]
    version: string
    id: number
}

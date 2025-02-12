import avatarSrc1 from "./images/avatar-1.png"
import avatarSrc2 from "./images/avatar-2.png"
import avatarSrc3 from "./images/avatar-3.png"
import avatarSrc4 from "./images/avatar-4.png"

export const GAME_SYMBOLS = {
  ROUND: "circle",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
}

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ROUND,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
]

export const PLAYERS = [
  {
    id: 1,
    name: "Karen",
    rating: 333,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Bob",
    rating: 555,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ROUND,
  },
  {
    id: 3,
    name: "Aliceeeeeee",
    rating: 444,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "VereIntedinglapotur",
    rating: 222,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
]

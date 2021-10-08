export interface ICard {
  image: string;
  value: string;
  suit: string;
  code: string;
}

export interface IDeckResult {
  deck_id: string;
  remaining: number;
  success: boolean;
  cards: ICard[];
}

export const CardsDeck = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 14,
};

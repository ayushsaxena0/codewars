/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades */

function defineSuit(card) {
  const num = card.charCodeAt(card.length - 1);
  switch (num) {
    case 9827:
      return "clubs";
    case 9830:
      return "diamonds";
    case 9824:
      return "spades";
    case 9829:
      return "hearts";
  }
}

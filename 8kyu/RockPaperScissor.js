/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */

const rps = (p1, p2) => {
  const a = "scissors";
  const b = "paper";
  const c = "rock";
  const x = "Player 1 won!";
  const y = "Player 2 won!";
  return p1 === a && p2 === b
    ? x
    : p1 === a && p2 === c
    ? y
    : p1 === b && p2 === c
    ? x
    : p1 === b && p2 === a
    ? y
    : p1 === c && p2 === a
    ? x
    : p1 === c && p2 === b
    ? y
    : "Draw!";
};

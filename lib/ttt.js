class TicTacToe {
  constructor(playerX = "X", playerO = "O") {
    this.playerX = playerX;
    this.playerO = playerO;
    this._currentTurn = false; // false = X's turn, true = O's turn
    this._x = 0; // Stores X's board state as a bitmask
    this._o = 0; // Stores O's board state as a bitmask
    this.turns = 0;
  }

  // Resets the game to its initial state
  reset() {
    this._x = 0;
    this._o = 0;
    this._currentTurn = false;
    this.turns = 0;
  }

  // Get the combined board of both players
  get board() {
    return this._x | this._o;
  }

  // Get the player who has the current turn
  get currentTurn() {
    return this._currentTurn ? this.playerO : this.playerX;
  }

  // Get the player who has the next turn
  get enemyTurn() {
    return this._currentTurn ? this.playerX : this.playerO;
  }

  // Check if any player has won by comparing their board with winning combinations
  static check(state) {
    for (let combo of [7, 56, 73, 84, 146, 273, 292, 448]) {
      if ((state & combo) === combo) return true;
    }
    return false;
  }

  // Convert board position (x, y) into a binary bitmask
  static toBinary(x = 0, y = 0) {
    if (x < 0 || x > 2 || y < 0 || y > 2) throw new Error("Invalid position");
    return 1 << (x + 3 * y);
  }

  /**
   * Make a move for a player
   * @param {number} player 0 for X, 1 for O
   * @param {number} x X coordinate (0-2) or position (0-8)
   * @param {number} y Y coordinate (optional)
   * @returns {-3|-2|-1|0|1} Status code
   * - -3: Game ended
   * - -2: Invalid move (not the player's turn)
   * - -1: Invalid position
   * -  0: Position already occupied
   * -  1: Success
   */
  turn(player = 0, x = 0, y) {
    if (this.isGameOver) return -3; // Game ended
    let pos = 0;

    if (y == null) {
      if (x < 0 || x > 8) return -1; // Invalid position
      pos = 1 << x;
    } else {
      if (x < 0 || x > 2 || y < 0 || y > 2) return -1; // Invalid position
      pos = TicTacToe.toBinary(x, y);
    }

    if (this._currentTurn ^ player) return -2; // Not the player's turn
    if (this.board & pos) return 0; // Position already occupied

    this[this._currentTurn ? "_o" : "_x"] |= pos;
    this._currentTurn = !this._currentTurn;
    this.turns++;
    return 1; // Successful move
  }

  // Render the current board as an array
  static render(boardX = 0, boardO = 0) {
    let x = parseInt(boardX.toString(2), 4);
    let y = parseInt(boardO.toString(2), 4) * 2;
    return [...(x + y).toString(4).padStart(9, "0")]
      .reverse()
      .map((value, index) => (value == 1 ? "X" : value == 2 ? "O" : ++index));
  }

  // Render the instance's current board
  render() {
    return TicTacToe.render(this._x, this._o);
  }

  // Check if the game has ended
  get isGameOver() {
    return this.turns >= 9 || this.winner !== false;
  }

  // Get the winner of the game
  get winner() {
    let xWin = TicTacToe.check(this._x);
    let oWin = TicTacToe.check(this._o);
    return xWin ? this.playerX : oWin ? this.playerO : false;
  }
}

module.exports = TicTacToe;
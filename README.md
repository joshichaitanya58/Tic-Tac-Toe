# Tic-Tac-Toe 🎮

A clean, responsive Tic-Tac-Toe game built with **HTML, CSS, and JavaScript**. Play locally with two players, track scores across rounds, and see winning combinations highlighted on the board.

<p align="center">
  <strong>Two Players · Score Tracking · Responsive UI · No Installation Required</strong>
</p>

## ✨ Features

- **Two-player gameplay** — play as X and O on the same device.
- **Custom player names** — enter names before starting a game.
- **Turn indicator** — clearly displays whose turn it is.
- **Win detection** — checks all eight possible winning combinations.
- **Winning-cell highlight** — highlights the three cells that complete a win.
- **Draw detection** — identifies a draw when the board is full.
- **Scoreboard** — tracks wins for both players and the number of draws across rounds.
- **Play Again** — starts a new round while keeping the current scores.
- **Change Players** — returns to setup and resets the scores.
- **Responsive styling** — adapts to different screen sizes.
- **Interactive visual effects** — hover states, transitions, and win animations.

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and game interface |
| CSS3 | Layout, responsive styling, transitions, and animations |
| JavaScript (Vanilla) | Game rules, turns, win/draw detection, and score tracking |

No frameworks, build tools, or package installation are required.

## 🚀 Getting Started

### Run locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/joshichaitanya58/Tic-Tac-Toe.git
   ```

2. **Open the project folder**
   ```bash
   cd Tic-Tac-Toe
   ```

3. **Launch the game**

   Open `index.html` in your browser. You can also use the **Live Server** extension in Visual Studio Code for local development.

## 📁 Project Structure

```text
Tic-Tac-Toe/
├── index.html   # Game markup and interface
├── style.css    # Styling, layout, and animations
└── main.js      # Game logic and event handling
```

## 🎯 How to Play

1. Enter a name for Player 1 (X) and Player 2 (O).
2. Select **Start Game**.
3. Players take turns selecting an empty cell.
4. The first player to align three marks horizontally, vertically, or diagonally wins.
5. If all nine cells are filled without a winner, the round ends in a draw.
6. Select **Play Again** for another round or **Change Players** to enter different names.

## 🧠 Game Logic

The game uses the eight standard winning combinations:

- Three rows
- Three columns
- Two diagonals

After each move, the game checks for a win. If no winning combination is found, it checks whether every cell is occupied to determine a draw. Once a round ends, the board is locked until the next round begins.

## 🌐 Live Demo

If GitHub Pages is enabled for this repository, you can play the game here:

**https://joshichaitanya58.github.io/Tic-Tac-Toe/**

## 🔮 Possible Future Improvements

- Add single-player mode with an AI opponent.
- Add sound effects and additional themes.
- Save scores between browser sessions using local storage.
- Add keyboard navigation and enhanced accessibility.
- Add online multiplayer support.

## 👨‍💻 Author

**Chaitanya Joshi**

- GitHub: [@joshichaitanya58](https://github.com/joshichaitanya58)
- Portfolio: [my-portfolio-delta-virid-82.vercel.app](https://my-portfolio-delta-virid-82.vercel.app/)
- LinkedIn: [Chaitanya Joshi](https://www.linkedin.com/in/chaitanya-joshi-644b39298/)

---

<p align="center">
  Built with HTML, CSS, and JavaScript.
</p>

'use strict';

const e = React.createElement;

class MasterMindGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_started: false,
      alphabet_size: 8,
      number_of_colours: 4,
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      secret: '',
      next_guess: '',
      guesses: [],
      iterations: 0,
      error_message: false
    };
  }

  handleAlphabetSizeChange(e) {
    let alphabet_size = parseInt(e.target.value);
    if (isNaN(alphabet_size)) {alphabet_size = 0;}
    this.setState({ alphabet_size: alphabet_size });
  }

  handleNumberOfColoursChange(e) {
    let number_of_colours = parseInt(e.target.value);
    if (isNaN(number_of_colours)) {number_of_colours = 0;}
    this.setState({ number_of_colours: number_of_colours });
  }

  handleGameInitialization() {
    const nc = this.state.number_of_colours;
    const as = this.state.alphabet_size;
    const valid = nc > 1 && nc < 11 && as > 1 && as < 27;
    if (valid) {
      const alphabet = this.state.alphabet.slice(0, this.state.alphabet_size);
      const secret = Array(nc).fill(0).map(() => alphabet[Math.floor(Math.random() * as)]).join("");
      this.setState({
        alphabet: alphabet,
        game_started: true,
        secret: secret
      });
    }
  }

  renderGameInfo() {
    return (/*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("form", { id: "start-game", onSubmit: this.handleGameInitialization.bind(this) }), /*#__PURE__*/

      React.createElement("table", null, /*#__PURE__*/

      React.createElement("tbody", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { align: "right" }, "Alphabet"), /*#__PURE__*/
      React.createElement("td", { align: "left" },
      this.state.alphabet
      )
      ), /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { align: "right" }, "Number of Colours"), /*#__PURE__*/
      React.createElement("td", { align: "left" },
      this.state.number_of_colours
      )
      )
      )
      )
      ));

  }

  renderSelection() {
    return (/*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("table", null, /*#__PURE__*/
      React.createElement("tbody", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { align: "right" }, "Alphabet size"), /*#__PURE__*/
      React.createElement("td", { align: "left" }, "2 \u2264 ", /*#__PURE__*/
      React.createElement("input", { form: "start-game", type: "text", value: this.state.alphabet_size, name: "name", onChange: this.handleAlphabetSizeChange.bind(this) }), " \u2264 26"
      )
      ), /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { align: "right" }, "Number of Colours"), /*#__PURE__*/
      React.createElement("td", { align: "left" }, "2 \u2264 ", /*#__PURE__*/
      React.createElement("input", { form: "start-game", type: "text", value: this.state.number_of_colours, name: "name", onChange: this.handleNumberOfColoursChange.bind(this) }), " \u2264 10"
      )
      ), /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { colSpan: "2", align: "center" }, /*#__PURE__*/
      React.createElement("button", { className: "button", onClick: () => this.handleGameInitialization() }, "Start Game")
      )
      )
      )
      )
      ));

  }

  getStringScore(string) {
    let totally_correct = 0;
    var n = this.state.number_of_colours;

    for (var i = 0; i < n; i++) {
      if (this.state.secret[i] == string[i]) {totally_correct += 1;}
    }

    var i = 0;
    var j = 0;
    var partially_correct = 0;
    const a = string.split('').sort().join('');
    const b = this.state.secret.split('').sort().join('');
    while (i < n && j < n) {
      if (a[i] == b[j]) {
        partially_correct++;
        j++;
        i++;
      } else if (a[i] > b[j]) {
        j++;
      } else {
        i++;
      }
    }
    partially_correct -= totally_correct;
    const incorrect = n - totally_correct - partially_correct;
    const string_score = "X".repeat(totally_correct) + "O".repeat(partially_correct) + "-".repeat(incorrect);
    return string_score;
  }

  handleGuessChange(e) {
    e.preventDefault();
    let valid = true;
    for (var i = 0; i < e.target.value.length; i++) {valid = valid && this.state.alphabet.includes(e.target.value.charAt(i));}
    if (valid) {
      this.setState({
        next_guess: e.target.value,
        error_message: false
      });
    }
    if (!valid) {
      this.setState({
        error_message: "You must submit colours in the set " + this.state.alphabet
      });
    }
    this.getStringScore(e.target.value);
  }

  handleGuessSubmission() {
    const valid = this.state.next_guess.length == this.state.number_of_colours;
    if (!valid) {
      this.setState({
        error_message: this.state.next_guess.length.toString() + " colours were submitted instead of the needed " + this.state.number_of_colours.toString()
      });
    }
    if (valid) {
      const guess = this.state.next_guess;
      this.setState({
        guesses: this.state.guesses.concat({
          guess: guess,
          score: this.getStringScore(guess)
        }),
        next_guess: '',
        iterations: this.state.iterations + 1,
        error_message: false
      });
    }
  }

  renderGuessTable() {
    return (/*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, this.state.iterations, " ", this.state.iterations == 1 ? "Attempt" : "Attempts"), /*#__PURE__*/
      React.createElement("table", null, /*#__PURE__*/
      React.createElement("tbody", null,
      [...this.state.guesses].map((attempt) => /*#__PURE__*/
      React.createElement("tr", { key: attempt.guess }, /*#__PURE__*/
      React.createElement("td", { align: "right" }, attempt.guess), /*#__PURE__*/
      React.createElement("td", { align: "left" }, attempt.score)
      )
      ), /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { align: "right" }, /*#__PURE__*/
      React.createElement("input", { form: "guess-submission", type: "text", value: this.state.next_guess, name: "name", onChange: this.handleGuessChange.bind(this) })
      ), /*#__PURE__*/
      React.createElement("td", { align: "left" }, /*#__PURE__*/
      React.createElement("button", { form: "guess-submission", className: "button", onClick: this.handleGuessSubmission.bind(this) }, "Submit Guess")
      )
      )
      )
      )
      ));

  }

  renderError() {
    return (/*#__PURE__*/
      React.createElement("div", { align: "center" }, /*#__PURE__*/
      React.createElement("small", { style: { color: "#ff0000" } }, this.state.error_message)
      ));

  }

  render() {
    return (/*#__PURE__*/
      React.createElement("div", null,
      this.state.game_started ? this.renderGameInfo() : this.renderSelection(),
      this.state.error_message && this.renderError(),
      this.state.game_started && this.renderGuessTable()
      ));

  }
}

const domContainer = document.querySelector('#mastermind_game');
ReactDOM.render(e(MasterMindGame), domContainer);
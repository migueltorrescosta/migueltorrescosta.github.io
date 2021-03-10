'use strict';

const e = React.createElement;

class MasterMindGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            game_started: false,
            alphabet_size: 8,
            number_of_colours: 4,
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            secret: '',
            next_guess: '',
            guesses: []
        }
    }

    handleAlphabetSizeChange(e) {
        let alphabet_size = parseInt(e.target.value);
        if (isNaN(alphabet_size)) { alphabet_size = 0 }
        this.setState({ alphabet_size: alphabet_size })
    }

    handleNumberOfColoursChange(e) {
        let number_of_colours = parseInt(e.target.value);
        if (isNaN(number_of_colours)) { number_of_colours = 0 }
        this.setState({ number_of_colours: number_of_colours })
    }

    handleGameInitialization() {
        const nc = this.state.number_of_colours;
        const as = this.state.alphabet_size;
        const valid = (nc > 1 && nc < 11 && as > 1 && as < 27);
        if (valid) {
            const alphabet = this.state.alphabet.slice(0, this.state.alphabet_size);
            const secret = Array(nc).fill(0).map(() => alphabet[Math.floor(Math.random() * as)]).join("");
            this.setState({
                alphabet: alphabet,
                game_started: true,
                secret: secret
            })
        }
    }

    renderGameInfo() {
        return (
            <div>
                <form id="start-game" onSubmit={this.handleGameInitialization.bind(this)}></form>

                <table>

                    <tbody>
                        <tr>
                            <td align="right">Alphabet</td>
                            <td align="left">
                                {this.state.alphabet}
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Number of Colours</td>
                            <td align="left">
                                {this.state.number_of_colours}
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div>
        )
    }

    renderSelection() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td align="right">Alphabet size</td>
                            <td align="left">
                                2 &le; <input form="start-game" type="text" value={this.state.alphabet_size} name="name" onChange={this.handleAlphabetSizeChange.bind(this)} /> &le; 26
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Number of Colours</td>
                            <td align="left">
                                2 &le; <input form="start-game" type="text" value={this.state.number_of_colours} name="name" onChange={this.handleNumberOfColoursChange.bind(this)} /> &le; 10
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <button className='button' onClick={() => this.handleGameInitialization()}>Start Game</button>
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div>
        )
    }

    getStringScore(string) {
        let totally_correct = 0;
        var n = this.state.number_of_colours

        for (var i = 0; i < n; i++) {
            if (this.state.secret[i] == string[i]) { totally_correct += 1 }
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
        console.log("=".repeat(30));
        console.log(totally_correct);
        console.log(partially_correct);
        console.log(incorrect);
        const string_score = "X".repeat(totally_correct) + "O".repeat(partially_correct) + "-".repeat(incorrect);
        return string_score;
    }

    handleGuessChange(e) {
        e.preventDefault();
        let valid = true;
        for (var i = 0; i < e.target.value.length; i++) { valid = valid && this.state.alphabet.includes(e.target.value.charAt(i)) }
        if (valid) { this.setState({ next_guess: e.target.value }) }
        this.getStringScore(e.target.value);
    }

    handleGuessSubmission() {
        const valid = (this.state.next_guess.length == this.state.number_of_colours);
        if (valid) {
            const guess = this.state.next_guess;
            this.setState({
                guesses: this.state.guesses.concat({
                    guess: guess,
                    score: this.getStringScore(guess)
                }),
                next_guess: '',
            })
        }
    }

    renderGuessTable() {
        return (
            <div>
                <h1>Attempts</h1>
                <table>
                    <tbody>
                        {[...this.state.guesses].map(attempt => (
                            <tr>
                                <td>{attempt.guess}</td>
                                <td>{attempt.score}</td>
                            </tr>
                        ))}
                        <tr>
                            <td align="right">
                                <input form="guess-submission" type="text" value={this.state.next_guess} name="name" onChange={this.handleGuessChange.bind(this)} />
                            </td>
                            <td align="left">
                                <button form="guess-submission" className='button' onClick={this.handleGuessSubmission.bind(this)}>Submit Guess</button>
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div>
        )
    }

    render() {
        return <div>
            {this.state.game_started ? this.renderGameInfo() : this.renderSelection()}
            {this.state.game_started && this.renderGuessTable()}
        </div>
    }
}

const domContainer = document.querySelector('#mastermind_game');
ReactDOM.render(e(MasterMindGame), domContainer);
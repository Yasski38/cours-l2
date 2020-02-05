import React, {Component} from 'react';
import { randomWord } from "./words";
import step0 from './images/0.jpg';
import step1 from './images/1.jpg';
import step2 from './images/2.jpg';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';


const API = 'https://api.github.com';
const GIST = 'https://gist.github.com/Yasski38/de156e7ce697e13f8ea623ba5b0b736d.js';
const TOKEN = 'de156e7ce697e13f8ea623ba5b0b736d';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
		images: [step0, step1, step2, step3, step4, step5, step6]
  };

  constructor(props) {
    super(props);
    this.words=[];
		this.state = {  mistake: 0, guessed: new Set(), answer: "" };
		this.handleGuess = this.handleGuess.bind(this);
  }

  componentDidMount() {
    this.fetchResults();
   
  }

  async fetchResults() {
     fetch(`${API}/gists/${TOKEN}`)
     .then(response => response.json())
     .then(data =>
     {
    // console.log(data);
    this.words = data.files.ListeMot.content.split("\n");
     console.log(data.files.ListeMot.content)
      this.setState({
        
        answer: this.randomWord(),
        isLoading: false,
      })
     }
    )
     
    .catch(error => this.setState({ error, isLoading: false }));
  }



  randomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  guessedWord() {
    return this.state.answer.split("").map(bingo => (this.state.guessed.has(bingo) ? bingo : "_"));
  }

  handleGuess(evt) {
    let letter = evt.target.value;
		this.setState(st => ({
			guessed: st.guessed.add(letter),
			mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
		}));
  }

  saveResults() {
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
			<button
				key={letter}
				value={letter}
				onClick={this.handleGuess}
				disabled={this.state.guessed.has(letter)}
			>
				{letter}
			</button>
		));
  }

  resetButton = () => {
      this.setState({
  			mistake: 0,
  			guessed: new Set(),
  			answer: randomWord()
  		});
  };

  render() {
    console.log(this.words);
    if (this.state.answer === '') {
      return (
        <div className="Hangman">
          <p className="text-center text-light">Chargement de mots... </p>
        </div>
      );
    }

    const gameOver = this.state.mistake >= this.props.maxWrong;
    const altText = `${this.state.mistake}/${this.props.maxWrong} mauvais choix`;
    const isWinner = this.guessedWord().join('') === this.state.answer;
    let gameStat = this.generateButtons();
    if (isWinner) {
      gameStat = 'GAGNE';
    }
    if (gameOver) {
      gameStat = 'PERDU';
    }

    console.log(this.state.mistake);

    return (
      <div className="Hangman">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand text-light" href="/">
            Pendu. <small>Joue ou meurs.</small>
          </a>
          <span className="d-xl-none d-lg-none text-primary">
              Mauvais choix: <span data-testid="wrong">{this.state.mistake}</span>
          </span>
          <button
            className="navbar-toggler sr-only"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item "></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
            <span className="navbar-text text-primary">
              Mauvais choix: {this.state.mistake}
            </span>
          </div>
        </nav>
        <p className="text-center">
          <img src={this.props.images[this.state.mistake]} alt={altText} />
        </p>
        <p className="text-center text-light">
          Devine le mot !
        </p>
        <p className="Hangman-word text-center">
          {!gameOver ? this.guessedWord() : this.state.answer}{' '}
        </p>

        <p className="text-center text-warning mt-4">{gameStat}</p>

        <div>
          <p className="text-center">
            <button className="Hangman-reset" onClick={this.resetButton}>
              Reset
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Hangman;

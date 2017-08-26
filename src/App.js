import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="inverse jumbotron-text">
          <h1 className="braces text-center">Joshua Travis</h1>
          <p className="subtext text-center">
            Web guy | Introvert
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 project">
            <h2 className="text-center">Conway's Game of Life</h2>
            <a href="http://jktravis.github.io/ZiplineGameOfLife/">
              <img className="img-responsive" src="img/gameOfLife.jpg"/>
            </a>
            <p>
              Conway's game of life all "purpled" up in honor of Prince.
            </p>
          </div>
          <div className="col-md-4 project">
            <h2 className="text-center">Recipe Box</h2>
            <a href="http://jktravis.github.io/ZiplineRecipeBox">
              <img className="img-responsive" src="img/recipeBox.jpg"/>
            </a>
            <p>
              A simple recipe storage app using ReactJS and local storage.
            </p>
          </div>
          <div className="col-md-4 project">
            <h2 className="text-center">Simon<sup>&reg;</sup></h2>
            <a href="http://codepen.io/jktravis/full/wGeeaN/">
              <img className="img-responsive" src="img/simon.jpg"/>
            </a>
            <p>
              My take on the classic Simon<sup>&reg;</sup> game.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 project">
            <h2 className="text-center">Markdown Previewer</h2>
            <a href="http://jktravis.github.io/ZiplineMarkdownPreviewer/">
              <img className="img-responsive" src="img/markdownPreviewer.png"/>
            </a>
            <p>
              A simple Markdown previewer written with ReactJS.
            </p>
          </div>
          <div className="col-md-4 project">
            <h2 className="text-center">Tic-Tac-Toe</h2>
            <a href="http://jktravis.com/ZiplineTicTacToe/">
              <img className="img-responsive" src="img/ticTacToe.png"/>
            </a>
            <p>
              Tic-Tac-Toe minimax.
            </p>
          </div>
          <div className="col-md-4 project">
            <h2 className="text-center">Pomodoro Clock</h2>
            <a href="http://codepen.io/jktravis/full/rOVdJZ/">
              <img className="img-responsive" src="img/pomodoro.png"/>
            </a>
            <p>
              A <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">pomodoro</a> clock.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 project">
            <h2 className="text-center">Invocations Online</h2>
            <a href="https://www.invocationsonline.com/">
              <img className="img-responsive" src="img/invocationsOnline.png"/>
            </a>
            <p>
              Allows for the collection of municipal meeting data by locality. First project that was volunteerism.
              Also first attempt at doing something in Rails.
              <a href="https://bitbucket.org/cffc/invocations_rails/">BitBucket Repo</a>.
            </p>
          </div>
          <div className="col-md-4 project">
            <h2 className="text-center">When in Rome</h2>
            <a href="http://jktravis.github.io/WhenInRome/">
              <img className="img-responsive" src="https://images.unsplash.com/photo-1421780791481-c5fb9d369db7?q=80&fm=jpg&s=d4cb14326f974bff3b1da50958352fc3&w=360"/>
            </a>
            <p>
              A simple Decimal to Roman numeral converter up to the number 1000.
            </p>
          </div>
        </div>
        <footer>
          <div className="jumbotron-text">
            <h2 className="text-center">Contact me</h2>
            <div className="row">
              <div className="col-md-3">
                <a className="btn btn-block" href="https://twitter.com/jktravis" target="_blank">
                  <i className="fa fa-twitter"/> Twitter
                </a>
              </div>
              <div className="col-md-3">
                <a className="btn btn-block" href="https://www.linkedin.com/in/jktravis" target="_blank">
                  <i className="fa fa-linkedin-square"/> LinkedIn
                </a>
              </div>
              <div className="col-md-3">
                <a className="btn btn-block" href="https://github.com/jktravis" target="_blank">
                  <i className="fa fa-github"/> GitHub
                </a>
              </div>
              <div className="col-md-3">
                <a className="btn btn-block" href="http://www.freecodecamp.com/jktravis" target="_blank">
                  <i className="fa fa-fire"/> Free Code Camp
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

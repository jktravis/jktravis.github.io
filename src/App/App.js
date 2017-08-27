import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import './App.css';

import gameOfLifeJpg from './img/gameOfLife.jpg';
import invocationsPng from './img/invocationsOnline.png';
import markdownPng from './img/markdownPreviewer.png';
import pomodoroPng from './img/pomodoro360.png';
import recipeJpg from './img/recipeBox360.jpg';
import simonJpg from './img/simon360.jpg';
import ticTacToePng from './img/ticTacToe.png';

import data from '../data';

import Header from '../Header';
import Card from '../Card';

class App extends Component {
  render() {
    return (
      <Grid>
        <Header/>
        <Row>
          {data.map(datum => {
            return (
              <Col md={4} className="project">
                <Card img={datum.img}
                      altText={datum.altText}
                      title={datum.title}
                      text={datum.text}
                      linkText={datum.linkText}
                      href={datum.href}
                />
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col md={4} className="project">
            <h2 className="text-center">Markdown Previewer</h2>
            <a href="http://jktravis.github.io/ZiplineMarkdownPreviewer/">
              <img className="img-responsive" src={markdownPng}/>
            </a>
            <p>
              A simple Markdown previewer written with ReactJS.
            </p>
          </Col>
          <Col md={4} className="project">
            <h2 className="text-center">Tic-Tac-Toe</h2>
            <a href="http://jktravis.com/ZiplineTicTacToe/">
              <img className="img-responsive" src={ticTacToePng}/>
            </a>
            <p>
              Tic-Tac-Toe minimax.
            </p>
          </Col>
          <Col md={4} className="project">
            <h2 className="text-center">Pomodoro Clock</h2>
            <a href="http://jktravis.com/ZiplinePomodoroClock/">
              <img className="img-responsive" src={pomodoroPng}/>
            </a>
            <p>
              A <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">pomodoro</a> clock.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="project">
            <h2 className="text-center">Invocations Online</h2>
            <a href="https://www.invocationsonline.com/">
              <img className="img-responsive" src={invocationsPng} />
            </a>
            <p>
              Allows for the collection of municipal meeting data by locality. First project that was volunteerism.
              Also first attempt at doing something in Rails.
              <a href="https://bitbucket.org/cffc/invocations_rails/">BitBucket Repo</a>.
            </p>
          </Col>
          <Col md={4} className="project">
            <h2 className="text-center">When in Rome</h2>
            <a href="http://jktravis.github.io/WhenInRome/">
              <img className="img-responsive" src="https://images.unsplash.com/photo-1421780791481-c5fb9d369db7?q=80&fm=jpg&s=d4cb14326f974bff3b1da50958352fc3&w=360"/>
            </a>
            <p>
              A simple Decimal to Roman numeral converter up to the number 1000.
            </p>
          </Col>
          <Col md={4}>
            <Card img={markdownPng}
                  altText="Markdown"
                  title="Markdown"
                  text="this is a markdown thing"
                  linkText="Google"
                  href="http://google.com"
            />
          </Col>
        </Row>
        <footer>
          <div className="jumbotron-text">
            <h2 className="text-center">Contact me</h2>
            <Row>
              <Col md={3}>
                <a className="btn btn-block" href="https://twitter.com/jktravis" target="_blank">
                  <i className="fa fa-twitter"/> Twitter
                </a>
              </Col>
              <Col md={3}>
                <a className="btn btn-block" href="https://www.linkedin.com/in/jktravis" target="_blank">
                  <i className="fa fa-linkedin-square"/> LinkedIn
                </a>
              </Col>
              <Col md={3}>
                <a className="btn btn-block" href="https://github.com/jktravis" target="_blank">
                  <i className="fa fa-github"/> GitHub
                </a>
              </Col>
              <Col md={3}>
                <a className="btn btn-block" href="http://www.freecodecamp.com/jktravis" target="_blank">
                  <i className="fa fa-fire"/> Free Code Camp
                </a>
              </Col>
            </Row>
          </div>
        </footer>
      </Grid>
    );
  }
}

export default App;

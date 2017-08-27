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
    const chunkSize = 3;
    const groups = data.map((datum, idx) => {
      return idx % chunkSize === 0 ? data.slice(idx, idx+ chunkSize) : null;
    })
      .filter(datum => datum);
    console.log(groups);
    return (
      <Grid>
        <Header/>
        {
          groups.map((group, rIdx) => {
            return (
              <Row key={rIdx}>
                {group.map((datum, cIdx) => {
                  return (
                    <Col key={`${rIdx}.${cIdx}`} md={4} className="project">
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
            )
          })
        }
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

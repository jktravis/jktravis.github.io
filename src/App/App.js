import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';
import FaFire from 'react-icons/lib/fa/fire';

import './App.css';

import data from '../data';

import Header from '../Header';
import Card from '../Card';
import FooterLink from '../FooterLink';

class App extends Component {
  render() {
    const chunkSize = 3;
    const groups = data.map((datum, idx) => {
      return idx % chunkSize === 0 ? data.slice(idx, idx+ chunkSize) : null;
    })
      .filter(datum => datum);

    const LightGreen = styled.span`
      color: #87DC7E;
    `;
    const leftBrace = "{";
    const rightBrace = "}";
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
        <footer className="footer">
          <Row className="justify-content-md-center">
            <div className="col col-md-2">
              <strong>const</strong> contact = <LightGreen>{leftBrace}</LightGreen>
              <div style={{marginLeft: '2em'}}>
                <FooterLink Icon={FaTwitter} href="https://twitter.com/jktravis" text="jktravis" />
                <FooterLink Icon={FaLinkedIn} href="https://www.linkedin.com/in/jktravis" text="jktravis" />
                <FooterLink Icon={FaGithub} href="https://github.com/jktravis" text="jktravis" />
                <FooterLink Icon={FaFire} href="http://www.freecodecamp.com/jktravis" text="jktravis" />
              </div>
              <LightGreen>{rightBrace}</LightGreen>
            </div>
          </Row>
        </footer>
      </Grid>
    );
  }
}

export default App;

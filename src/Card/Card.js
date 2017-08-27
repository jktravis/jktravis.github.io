import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  img: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
}

class Card extends Component {
  render() {
    return (
      <div className="card" style={{width: '20rem'}}>
        <img className="card-img-top" src={this.props.img} alt={this.props.altText}/>
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.text}</p>
          <a href={this.props.href} className="btn btn-primary">{this.props.linkText}</a>
        </div>
      </div>
    )
  }
}

Card.propTypes = propTypes;

export default Card

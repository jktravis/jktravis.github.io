import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="braces text-center">
          <span className="header__key">name</span>: <span className="header__value">"Joshua Travis"</span>
        </h1>
        <p className="text-center lead">
          Web guy | Introvert
        </p>
      </div>
    )
  }
}

export default Header

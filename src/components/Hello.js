import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * This is an example child component with documentation. It includes
 * an example of how to document props.
 */
class Hello extends Component {
  /**
   * Reverse a string
   *
   * @param {string} text
   * @public
   */
  reverseString(text) {
    return text
      .split("")
      .reverse()
      .join("");
  }

  render() {
    return <p> Hello {this.reverseString(this.props.name)} </p>;
  }

  static propTypes = {
    /** Name is a string passed to the Hello component*/
    name: PropTypes.string
  };
}

export default Hello;

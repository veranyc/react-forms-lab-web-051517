import React from 'react';
import PropTypes from 'prop-types'

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: '',
    };
  }
    handleChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.tweet}
          onChange={this.handleChange}
          />
        <span>{this.props.maxChars - this.state.tweet.length}</span>
      </div>
    )
  }
}
// Span applies a change to the adjacent HTML text

TwitterMessage.propTypes = {
    maxChars: PropTypes.number
  }

TwitterMessage.defaultProps = {
    maxChars: 100
  }

export default TwitterMessage;

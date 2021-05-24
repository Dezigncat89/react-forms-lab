import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 280;
    }
    this.handleMaxChars = this.handleMaxChars.bind(this)
}

    handleMaxChars = event => {
      const count = event.target.value.length;
      const maxLeft = 280 - count;
      this.setState({ maxChars: maxLeft});
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.maxChars} onChange={this.handleMaxChars} />
      </div>
    );
  }
}

export default TwitterMessage;

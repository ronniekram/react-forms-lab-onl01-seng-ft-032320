import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let characters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} name="message" id="message" onChange={this.handleMessage}/>
        <p>{characters} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;

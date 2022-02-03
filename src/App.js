import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: this.element.value });
  }

  render() {
    const text = this.state.value;

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input 
            type="text" 
            placeholder="Unos teksta" 
            ref={e => this.element = e} 
          />
        </label>
        <input type="submit" value="Početno stanje" />
      </form>
      <ul>
        <li>{ text }</li>
      </ul>
      </div>
    );
  }
}
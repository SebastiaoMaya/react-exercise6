import React, { Component } from 'react';

export default class CreateItem extends Component {
  state = {
    value: ''
  };

  addItem = event => {
    event.preventDefault();
    const { addItem } = this.props;
    addItem(this.state.value);
  };

  handleOnChange = input => {
    this.setState({ value: input });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.addItem}>
        <input
          type='text'
          value={value}
          onChange={event => this.handleOnChange(event.target.value)}
          placeholder='Enter New Item'
        />
        <button disabled={this.inputIsEmpty()}> Add</button>
      </form>
    );
  }
}

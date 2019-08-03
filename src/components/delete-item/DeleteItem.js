import React, { Component } from 'react';

export default class DeleteItem extends Component {
  removeItem = () => {
    const { removeItem } = this.props;
    removeItem();
  };
  render() {
    const { noItemsFound } = this.props;

    return (
      <button onClick={this.removeItem} disabled={noItemsFound()}>
        Delete Last Item
      </button>
    );
  }
}

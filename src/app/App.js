import React from 'react';
import CreateItem from '../components/create-item/CreateItem';
import DeleteItem from '../components/delete-item/DeleteItem';
import ShoppingList from '../components/shopping-list/ShoppingList';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  state = {
    items: []
  };

  handleAddItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item]
    }));
  };

  handleDeleteLastItem = () => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateItem addItem={this.handleAddItem} />
        <DeleteItem
          removeItem={this.handleDeleteLastItem}
          noItemsFound={this.noItemsFound}
        />
        <ShoppingList items={this.state.items} />
      </div>
    );
  }
}

export default App;

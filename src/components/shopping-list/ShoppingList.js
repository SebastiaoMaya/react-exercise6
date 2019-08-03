import React from 'react';
import Item from '../item/Item';

export default function ShoppingList(props) {
  const { items } = props;
  return (
    <div>
      <p className='items'>Items</p>
      <ol className='item-list'>
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </ol>
    </div>
  );
}

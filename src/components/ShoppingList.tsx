import React from 'react';
import { useShopping } from '../context/ShoppingContext';
import { List, ListItem } from 'react-onsenui';

export const ShoppingList: React.FC = () => {
  const { shoppingList, removeItem } = useShopping();

  return (
    <List
      dataSource={shoppingList}
      renderRow={(item) => (
        <ListItem tappable key={item.id} onClick={() => removeItem(item.id)}>
          {item.name}
        </ListItem>
      )}
    />
  );
};

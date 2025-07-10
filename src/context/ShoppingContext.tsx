import React, { createContext, useState, useContext } from 'react';
import { Item } from '../api';

type ShoppingContextType = {
  shoppingList: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
};

const ShoppingContext = createContext<ShoppingContextType | undefined>(undefined);

export const ShoppingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [shoppingList, setShoppingList] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setShoppingList(prev => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setShoppingList(prev => prev.filter(i => i.id !== id));
  };

  return (
    <ShoppingContext.Provider value={{ shoppingList, addItem, removeItem }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShopping must be used within ShoppingProvider');
  }
  return context;
};

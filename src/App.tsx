import React from 'react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Page } from 'react-onsenui';
import { ShoppingProvider } from './context/ShoppingContext';
import { ShoppingList } from './components/ShoppingList';
import { FrequentItemsOverlay } from './components/FrequentItemsOverlay';

const App: React.FC = () => {
  return (
    <ShoppingProvider>
      <Page>
        <ShoppingList />
        <FrequentItemsOverlay />
      </Page>
    </ShoppingProvider>
  );
};

export default App;

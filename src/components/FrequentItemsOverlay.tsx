import React, { useEffect, useState } from 'react';
import { Input, List, ListItem, BottomToolbar } from 'react-onsenui';
import { fetchFrequentItems, searchItems, Item } from '../api';
import { useShopping } from '../context/ShoppingContext';

export const FrequentItemsOverlay: React.FC = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const { addItem } = useShopping();

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim()) {
        setItems(await searchItems(query));
      } else {
        setItems(await fetchFrequentItems());
      }
    };
    fetchData();
  }, [query]);

  return (
    <BottomToolbar>
      <div style={{ padding: 8, width: '100%' }}>
        <Input
          value={query}
          onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
          placeholder="Suche Artikel..."
          modifier="underbar"
          float
        />
        <List
          dataSource={items}
          renderRow={(item) => (
            <ListItem tappable key={item.id} onClick={() => addItem(item)}>
              {item.name}
            </ListItem>
          )}
        />
      </div>
    </BottomToolbar>
  );
};

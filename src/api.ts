export type Item = {
  id: string;
  name: string;
};

export async function fetchFrequentItems(): Promise<Item[]> {
  return [
    { id: '1', name: 'Milch' },
    { id: '2', name: 'Brot' },
    { id: '3', name: 'Eier' }
  ];
}

export async function searchItems(query: string): Promise<Item[]> {
  const items = await fetchFrequentItems();
  return items.filter(i => i.name.toLowerCase().includes(query.toLowerCase()));
}

interface Item {
  id: number;
  name: string;
  image: string;
  details: string;
  price: number;
}

let items: Item[] = [];

export async function carregarItens() {
  const resposta = await fetch('http://localhost:3000/api/products');
  if (!resposta.ok) throw new Error('Erro ao buscar produtos');
  items = await resposta.json() as Item[];
  return items;
}

export { items };

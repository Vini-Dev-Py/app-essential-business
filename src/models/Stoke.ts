type Unit = 
  | "KG" // Quilograma
  | "G"  // Grama
  | "UN" // Unidade
  | "M"  // Metro
  | "L"; // Litro

export type StockItem = {
  id: string;
  name: string; // Nome do insumo (ex: Filamento PLA, Resina UV, Parafuso M3)
  description?: string; // Descrição opcional
  quantity: number; // Quantidade disponível no estoque
  unit: Unit; // Unidade de medida (KG, G, UN, M, L)
  minStock?: number; // Quantidade mínima para alerta de reposição
  createdAt: Date; // Data de criação do item
  updatedAt: Date; // Última atualização do item
};

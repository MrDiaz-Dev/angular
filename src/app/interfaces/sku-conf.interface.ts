export interface SKUQuery {
  id: number;
  sku: number;
  description: string;
  ea_height: number;
  ea_width: number;
  ea_depth: number;
  ea_volume: number;
  ea_weight: number;
}

export interface SKUQueryResponse {
  data: SKUQuery[];
  message: string;
  code: number;
  totalItems: number;
}

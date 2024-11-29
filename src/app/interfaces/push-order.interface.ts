export interface PushOrder {
  id: number;
  order: number;
  sku: number;
  qty: number;
  preparacion?: {
    id: number;
    numero: number;
  };
  volume: number;
  //dataConifgquery
  dataConfigId: number;
  pack_configs: string;
  palet_type: string;
  full_palet: number;
  pallet_height: number;
  mix_height: number;
  stackable: number;
  non_stackable: number;
  qty_remaining_mix: number;
  mix_pallet: number;
  layers_mix: number;
  weight_per_full_pallet: number;
  layer_height: number;
  ea_on_layer: number;
  pallet_qty: number;
  layers: number;
  eaToPk: number;
  pkToCa: number;
  caToPlt: number;
  shipperQty: number;
  //dataSku
  ea_height: number;
  ea_width: number;
  ea_depth: number;
  ea_volume: number;
  ea_weight: number;
}
export interface PushOrderResponse {
  code: number;
  message: string;
  data: PushOrder[];
  totalItems: number;
}

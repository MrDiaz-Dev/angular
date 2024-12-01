export interface DataConf {
  id: number;
  sku: number;
  qty: number;
  palet_type: string;
  full_palet: number;
  pallet_height: number;
  stackable: number;
  non_stackable: number;
  qty_remaining_mix: number;
  mix_pallet: number;
  layers_mix: number;
  weight_per_full_pallet: number;
  orden: number;
  pack_configs: string;
  layer_height: number;
  ea_on_layer: number;
  pallet_qty: number;
  layers: number;
  shipper_qty: number;
  ea_to_pk: number;
  pk_to_ca: number;
  ca_to_plt: number;
  // por si acaso
  mix_height?: number;
}

export interface DataConfResponse {
  data: DataConf[];
  message: string;
  code: number; 
  totalItems: number;
}


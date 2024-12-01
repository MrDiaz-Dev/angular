import { DataConf } from './data-conf.interface';
import { PushOrder } from './push-order.interface';
import { SKUQuery } from './sku-conf.interface';

export interface Requirement {
  id: number;
  material_number?: number;
  material_description?: string;
  quantity?: number;
  user_id?: string;
  origin?: string;
  marketcode?: string;
  doh?: number;
  renovated?: Date;
  upload_date?: Date;
  od?: string;
  reference?: string;

  // delivery_date?: Date;
  // release_status?: string;
  // processing_status?: string;
  // requesters_name?: string;
  // request_date?: Date;
  // pods_type?: string;
  // po?: string;
  // preparation_id?: number;
  // quantity_processed?: number;
  // quantity_pending?: number;
  // pallet_qty?: number;
  // ea_on_layer?: number;
  // layer_height?: number;
  // ea_volume?: number;
  // status?: string;
}

export interface RequirementsResponse {
  code: number;
  message: string;
  data: Requirement[];
  totalItems: number;
}
export interface RequirementSingleResponse {
  code: number;
  message: string;
  data: Requirement;
  totalItems: number;
}
export interface PendingsResponse {
  code: number;
  message: string;
  data: Pending[];
  totalItems: number;
}
export interface PendingResponse {
  code: number;
  message: string;
  data: Pending;
  totalItems: number;
}

export interface Pending {
  id: number;
  full_pallet: string;
  quantity: number;
  requirement_id: number;
  zone_id: number;
  preparation_id: number;
  height: number;
  layers: number;
  mix_pallet: string;
  mix_id: number;
  type: string;
  sku: number;
  unprocesseds: Pending[];
  delivery_date: string;
  volume: number;
  reference?: string;
  renovated?: string | Date;
  od?: string;
}
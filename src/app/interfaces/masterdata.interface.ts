import { DataConf } from "./data-conf.interface";

export interface Masterdata {
  id?: number;
  sku: number;
  description: string;
  packconfig: string;
  layer_height: number;
  eaches_on_layer: number;
  ea_in_pack: number;
  packs_in_shipper: number;
  shippers_on_pallet: number;
  shipper_qty: number;
  pallet_qty: number;
  ea_volume: number;
  ea_weight: number;
  pallet_type: string;
}

export interface MasterdataResponse {
  data: Masterdata[];
  code: number;
  message: string;
  totalItems: number;
}

export interface MasterdataSingleResponse {
  data: Masterdata;
  code: number;
  message: string;
}
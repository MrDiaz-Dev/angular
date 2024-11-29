import { Requirement, Pending } from './requierements.interface';
import { Zone } from './zone.interface';

export interface Preparation {
  id: number;
  number: number;
  send_date: string;
  status: any;
  total_occupancy: number;
  container_planing: any;
  // requirements: Requirement[];
  unprocesseds: Pending[];
  zones: Zone[];
  od?: string;
  area_occupancy: number;
}
export interface PreparationPost {
  data: {
    unprocesseds: number[];
  };
}

export interface PreparationSingleResponse {
  data: Preparation;
  code: number;
  message: string;
}

export interface PreparationsResponse {
  code: number;
  message: string;
  data: Preparation[];
  totalItems: number;
}

export interface SugPreparation {
  id: number;
  number: number;
  send_date: string;
  status: string;
  total_occupancy: number;
  container_planing: number;
  received_by: string;
  received_date: string;
  container: string;
  pre_unprocesseds: Preunprocessed[];
  zones: SugZone[];
  od?: string;
  area_occupancy: number;
}

export interface SugZone {
  type: string;
  unprocesseds: [
    {
      id: number;
      fecha: string;
      tipo: string;
      altura: number;
      area: number;
      sug_preparation_id: number;
      unprocessed_id: number;

      cantidad?: number;
      doh?: number;
      ea_on_layer?: number;
      full_layer?: string;
      full_pallet?: string;
      layer_height?: number;
      layers?: number;
      mix_id?: number;
      mix_pallet?: string;
      sku?: number;
    }
  ];
}

export interface Preunprocessed {
  id: number;
  sku: string;
  fecha: string;
  tipo: string;
  altura: number;
  area: number;
  sug_preparation_id: number;
  unprocessed_id: number;
}

export interface SugPreparationSingleResponse {
  data: SugPreparation;
  code: number;
  message: string;
}

export interface SugPreparationsResponse {
  code: number;
  message: string;
  data: SugPreparation[];
  totalItems: number;
}

export interface Transit {
  id?: number;
  origin: number;
  marketcode: string;
  transit_time: number;
  safety_margin: string;
  doh_priority: number;
}

export interface TransitResponse {
  data: Transit[];
  code: number;
  message: string;
  totalItems: number;
}

export interface TransitSingleResponse {
  data: Transit;
  code: number;
  message: string;
}

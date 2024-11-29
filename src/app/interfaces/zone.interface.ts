export interface ZoneResponse {
  code: number;
  message: string;
  data: Zone;
}
export interface ZonesResponse {
  code: number;
  message: string;
  data: Zone[];
}

export interface Zone {
  id?: number;
  preparation_id: number;
  type: string;
  status?: string;
  unprocesseds?: any[];
  totalHeight?: number;
}

export interface ZoneCreateBody {
  data: Zone;
}

export interface addPendingToZoneBody {
  data: {
    unprocessed_id: number;
    zone_id: number;
  };
}
export interface removePendingFromZoneBody {
  data: {
    unprocessed_id: number;
  };
}

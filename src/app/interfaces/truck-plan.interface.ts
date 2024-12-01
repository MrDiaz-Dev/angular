export interface TruckPlanResponse {
  data: TruckPlan[];
  code: number;
  message: string;
  totalItems?: number;
}

export interface TruckPlanSingleResponse {
  data: TruckPlan;
  code: number;
  message: string;
}

export interface TruckPlan {
  id: number;
  status: string;
  volume_occupancy: number;
  truck_planing: any;
  trucks: Truck[];
}

interface Truck {
  id: number;
  truck_plan_id: number;
  floor_occupancy: string;
  volume_occupancy: string;
  total_occupancy: string;
  truck_zones: Truckzone[];
}

interface Truckzone {
  id: string;
  type: string;
  status: null;
  truck_id: number;
  unprocesseds: Unprocessed[];
}

interface Unprocessed {
  id: number;
  full_pallet: string;
  quantity: number;
  requirement_id: number;
  zone_id: string;
  preparation_id: number;
  height: number;
  layers: number;
  mix_pallet: string;
  mix_id: null;
  type: string;
  sku: number;
  delivery_date: string;
  status: string;
  volume: number;
  renovated: null;
  od: string;
  truck_zone_id: string;
}
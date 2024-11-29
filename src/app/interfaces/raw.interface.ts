export interface Raw {
  id?: number;
  date: string;
  goods_inbound_hrs: number;
  inventory_accuracy_pct: number;
  outbound_order_processing_time: number;
  transport_on_time_delivery: number;
  delivery_lines_shipped_week: number;
  available_vs_contracted_storage_pct: number;
  difot: number;
  sifot: number;
  cost_per_pack_cpp: string;
}

export interface RawResponse {
  data: Raw[];
  code: number;
  message: string;
  totalItems: number;
}

export interface RawSingleResponse {
  data: Raw;
  code: number;
  message: string;
}
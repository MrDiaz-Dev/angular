export interface Inventory {
  id?: number;
  mb?: string;
  plant?: number;
  sloc?: string;
  sap_material?: number;
  batch?: string;
  serial_no?: string;
  tpd_expiry_date?: Date | string;
  sap_expiry_date?: Date | string;
  exp?: string;
  ur?: string;
  qi?: string;
  blk?: string;
  bsr?: string;
  tpd_unrestricted?: number;
  tpd_in_qi?: number;
  tpd_blocked?: number;
  tpd_bsr?: number;
  sap_unrestricted?: number;
  in_qi?: number;
  sap_blocked?: number;
  sap_bsr?: number;
  diff_avl?: number;
  diff_qi?: number;
  diff_blocked?: number;
  diff_bsr?: number;
  da_comment?: string;
  da_action?: string;
  po_delivery?: string;
  status?: string;
  open_date?: Date | string;
  da_action_or_short_term_workaround?: string;
  root_cause_3pl_cvt_timing_and_reason?: number;
  idoc_number?: number;
  originated_by?: number;
  permanent_fix?: number;
  kpi_rc?: string;
  total?: number;
  count?: number;
  unit_price?: string;
  eur_discrepancy_value?: string;
}

export interface InventoryResponse {
  data: Inventory[];
  code: number;
  message: string;
  totalItems: number;
}

export interface InventorySingleResponse {
  data: Inventory;
  code: number;
  message: string;
}
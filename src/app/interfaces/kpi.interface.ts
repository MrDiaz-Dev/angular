export interface KPI {
  id?: number;
  area: string;
  ceva_able: string;
  consequence_penalised: string;
  frequency: string;
  activity: string;
  description: string;
  definition: string;
  target: string;
  exception_management_reporting: string;
  include_in_interim: string;
}

export interface KPIResponse {
  data: KPI[];
  code: number;
  message: string;
  totalItems: number;
}

export interface KPISingleResponse {
  data: KPI;
  code: number;
  message: string;
}
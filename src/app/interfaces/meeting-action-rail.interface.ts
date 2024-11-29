export interface MeetingActionRail {
  id?: number
  date: string;
  action: string;
  owner: string;
  comments: string;
  open_closed: string;
  country: string;
  priority: string;
  due_date: string;
  completion_date: string;
  dependencies: string;
}

export interface MeetingActionRailResponse {
  data: MeetingActionRail[];
  code: number;
  message: string;
  totalItems: number;
}

export interface MeetingActionRailSingleResponse {
  data: MeetingActionRail;
  code: number;
  message: string;
}
export interface VehicleDescriptor {
  id?: string;
  label?: string;
  license_plate?: string;
}

export const enum TripScheduleRelationship {
  SCHEDULED = "SCHEDULED",
  ADDED = "ADDED",
  UNSCHEDULED = "UNSCHEDULED",
  CANCELED = "CANCELED",
}

export interface TripDescriptor {
  trip_id?: string;
  route_id?: string;
  direction_id?: number;
  start_time?: string;
  start_date?: string;
  schedule_relationship?: TripScheduleRelationship;
}

export interface EntitySelector {
  agency_id?: string;
  route_id?: string;
  route_type?: number;
  direction_id?: number;
  trip?: TripDescriptor;
  stop_id?: string;
}

export const enum Cause {
  UNKNOWN_CAUSE = "UNKNOWN_CAUSE",
  OTHER_CAUSE = "OTHER_CAUSE",
  TECHNICAL_PROBLEM = "TECHNICAL_PROBLEM",
  STRIKE = "STRIKE",
  DEMONSTRATION = "DEMONSTRATION",
  ACCIDENT = "ACCIDENT",
  HOLIDAY = "HOLIDAY",
  WEATHER = "WEATHER",
  MAINTENANCE = "MAINTENANCE",
  CONSTRUCTION = "CONSTRUCTION",
  POLICE_ACTIVITY = "POLICE_ACTIVITY",
  MEDICAL_EMERGENCY = "MEDICAL_EMERGENCY",
}

export const enum Effect {
  NO_SERVICE = "NO_SERVICE",
  REDUCED_SERVICE = "REDUCED_SERVICE",
  SIGNIFICANT_DELAYS = "SIGNIFICANT_DELAYS",
  DETOUR = "DETOUR",
  ADDITIONAL_SERVICE = "ADDITIONAL_SERVICE",
  MODIFIED_SERVICE = "MODIFIED_SERVICE",
  OTHER_EFFECT = "OTHER_EFFECT",
  UNKNOWN_EFFECT = "UNKNOWN_EFFECT",
  STOP_MOVED = "STOP_MOVED",
}

export interface Alert {
  active_period?: TimeRange[];
  informed_entity: EntitySelector[];
  cause?: Cause;
  effect?: Effect;
  url?: TranslatedString;
  header_text: TranslatedString;
  description_text: TranslatedString;
}

export interface TimeRange {
  start?: number;
  end?: number;
}

export interface Translation {
  text: string;
  language?: string;
}

export interface TranslatedString {
  translation: Translation[];
}

export interface Position {
  latitude: number;
  longitude: number;
  bearing?: string;
  odometer?: number;
  speed?: number;
}

export const enum OccupancyStatus {
  EMPTY = "EMPTY",
  MANY_SEATS_AVAILABLE = "MANY_SEATS_AVAILABLE",
  FEW_SEATS_AVAILABLE = "FEW_SEATS_AVAILABLE",
  STANDING_ROOM_ONLY = "STANDING_ROOM_ONLY",
  CRUSHED_STANDING_ROOM_ONLY = "CRUSHED_STANDING_ROOM_ONLY",
  FULL = "FULL",
  NOT_ACCEPTING_PASSENGERS = "NOT_ACCEPTING_PASSENGERS",
  NO_DATA_AVAILABLE = "NO_DATA_AVAILABLE",
  NOT_BOARDABLE = "NOT_BOARDABLE",
}

export const enum CongestionLevel {
  UNKNOWN_CONGESTION_LEVEL = "UNKNOWN_CONGESTION_LEVEL",
  RUNNING_SMOOTHLY = "RUNNING_SMOOTHLY",
  STOP_AND_GO = "STOP_AND_GO",
  CONGESTION = "CONGESTION",
  SEVERE_CONGESTION = "SEVERE_CONGESTION",
}

export const enum VehicleStopStatus {
  INCOMING_AT = "INCOMING_AT",
  STOPPED_AT = "STOPPED_AT",
  IN_TRANSIT_TO = "IN_TRANSIT_TO",
}

export interface VehiclePosition {
  trip?: TripDescriptor;
  vehicle?: VehicleDescriptor;
  position?: Position;
  current_stop_sequence?: number;
  stop_id?: string;
  current_status?: VehicleStopStatus;
  timestamp?: number;
  congestion_level?: CongestionLevel;
  occupancy_status?: OccupancyStatus;
}

export interface StopTimeEvent {
  delay?: number;
  time?: number;
  uncertainty?: number;
}

export const enum ScheduleRelationship {
  SCHEDULED = "SCHEDULED",
  SKIPPED = "SKIPPED",
  NO_DATA = "NO_DATA",
}

export interface StopTimeUpdate {
  stop_sequence?: number;
  stop_id?: string;
  arrival?: StopTimeEvent;
  departure?: StopTimeEvent;
  schedule_relationship: ScheduleRelationship;
}

export interface TripUpdate {
  trip: TripDescriptor;
  vehicle?: VehicleDescriptor;
  stop_time_update?: StopTimeUpdate[];
  timestamp?: number;
  delay?: number;
}

export interface FeedEntity {
  id: string;
  is_deleted?: boolean;
  trip_update?: TripUpdate;
  vehicle?: VehiclePosition;
  alert?: Alert;
}

export const enum Incrementality {
  FULL_DATASET = "FULL_DATASET",
  DIFFERENTIAL = "DIFFERENTIAL",
}

export interface FeedHeader {
  gtfs_realtime_version: string;
  incrementality: Incrementality;
  timestamp: number;
}

export interface FeedMessage {
  header: FeedHeader;
  entity?: FeedEntity[];
}

export interface GTFSRealtime {
  status: string;
  response: FeedMessage;
}

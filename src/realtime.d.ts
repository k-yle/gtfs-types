export const enum OccupancyStatus {
  EMPTY,
  MANY_SEATS_AVAILABLE,
  FEW_SEATS_AVAILABLE,
  STANDING_ROOM_ONLY,
  CRUSHED_STANDING_ROOM_ONLY,
  FULL,
  NOT_ACCEPTING_PASSENGERS,
  NO_DATA_AVAILABLE,
  NOT_BOARDABLE,
  UNKNOWN = -1,
}

export const enum CongestionLevel {
  UNKNOWN_CONGESTION_LEVEL,
  RUNNING_SMOOTHLY,
  STOP_AND_GO,
  CONGESTION,
  SEVERE_CONGESTION,
}

export interface StopTimeEvent {
  delay?: number;
  time?: number;
  uncertainty?: number;
}

export interface TripDescriptor {
  trip_id?: string;
  start_time?: string;
  start_date?: string;
  schedule_relationship?: TripScheduleRelationship;
  route_id?: string;
  direction_id?: number;
}

export enum TripScheduleRelationship {
  SCHEDULED,
  ADDED,
  UNSCHEDULED,
  CANCELED,
}

export enum StopTimeUpdateScheduleRelationship {
  SCHEDULED,
  SKIPPED,
  NO_DATA,
}

export interface VehicleDescriptor {
  id?: string;
  label?: string;
  license_plate?: string;
}

export interface TripUpdate {
  trip: TripDescriptor;
  stop_time_update?: StopTimeUpdate[];
  vehicle?: VehicleDescriptor;
  timestamp?: number;
  delay?: number;
}

export interface VehiclePosition {
  trip?: TripDescriptor;
  position?: Position;
  current_stop_sequence?: number;
  stop_id?: string;
  current_status?: VehicleStopStatus;
  congestion_level?: CongestionLevel;
  occupancy_status?: OccupancyStatus;
  vehicle?: VehicleDescriptor;
  timestamp?: number;
}

export interface FeedEntity {
  id: string;
  trip_update?: TripUpdate;
  vehicle?: VehiclePosition;
  is_deleted?: boolean;
  alert?: Alert;
}

export interface TimeRange {
  start?: number;
  end?: number;
}

export const enum Cause {
  UNKNOWN_CAUSE,
  OTHER_CAUSE,
  TECHNICAL_PROBLEM,
  STRIKE,
  DEMONSTRATION,
  ACCIDENT,
  HOLIDAY,
  WEATHER,
  MAINTENANCE,
  CONSTRUCTION,
  POLICE_ACTIVITY,
  MEDICAL_EMERGENCY,
}

export const enum Effect {
  NO_SERVICE,
  REDUCED_SERVICE,
  SIGNIFICANT_DELAYS,
  DETOUR,
  ADDITIONAL_SERVICE,
  MODIFIED_SERVICE,
  OTHER_EFFECT,
  UNKNOWN_EFFECT,
  STOP_MOVED,
}

export interface TranslatedString {
  translation: Translation[];
}

export interface Translation {
  text: string;
  language?: string;
}

export interface Alert {
  active_period?: TimeRange;
  informed_entity: EntitySelector[];
  cause?: Cause;
  effect?: Effect;
  url?: TranslatedString;
  header_text: TranslatedString;
  description_text: TranslatedString;
}

export interface Position {
  latitude: number;
  longitude: number;
  bearing?: string;
  odometer?: number;
  speed?: number;
}

export interface StopTimeUpdate {
  stop_sequence?: number;
  stop_id?: string;
  arrival?: StopTimeEvent;
  departure?: StopTimeEvent;
  schedule_relationship: StopTimeUpdateScheduleRelationship;
}

export interface EntitySelector {
  agency_id?: string;
  route_id?: string;
  route_type?: number;
  direction_id?: number;
  trip?: TripDescriptor;
  stop_id?: string;
}

export const enum VehicleStopStatus {
  INCOMING_AT,
  STOPPED_AT,
  IN_TRANSIT_TO,
}

export const enum Incrementality {
  FULL_DATASET,
  DIFFERENTIAL,
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

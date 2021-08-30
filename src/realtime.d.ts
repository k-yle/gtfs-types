export const enum Occupancy {
  EMPTY,
  MANY_SEATS_AVAILABLE,
  FEW_SEATS_AVAILABLE,
  STANDING_ROOM_ONLY,
  CRUSHED_STANDING_ROOM_ONLY,
  FULL,
  NOT_ACCEPTING_PASSENGERS,
  UNKNOWN = -1,
}
export const enum Congestion {
  UNKNOWN_CONGESTION_LEVEL,
  RUNNING_SMOOTHLY,
  STOP_AND_GO,
  CONGESTION,
  SEVERE_CONGESTION,
}
declare interface Time {
  delay: number;
  time: number;
  uncertainty: number;
}
interface RealTimeTrip {
  trip_id: string;
  start_time: string;
  start_date: string;
  schedule_relationship: number;
  route_id: string;
  direction_id: number;
}
interface Vehicle {
  id: string;
  label: string;
  license_plate: string;
}
export interface TripUpdate {
  trip: RealTimeTrip;
  stop_time_update?: {
    stop_sequence: number;
    arrival?: Time;
    departure?: Time;
    stop_id: string;
    schedule_relationship: number;
  };
  vehicle: Vehicle;
  timestamp: number;
  delay: number;
}
export interface VehicleUpdate {
  trip: RealTimeTrip;
  position?: {
    latitude: number;
    longitude: number;
    bearing: string;
    odometer: number;
    speed: number;
  };
  occupancy_status?: Occupancy;
  vehicle: Vehicle;
  timestamp: number;
}
export interface Entity {
  id: string;
  trip_update?: TripUpdate;
  vehicle?: VehicleUpdate;
  is_deleted: boolean;
}
interface timeRange {
  start?: Date;
  end?: Date;
}
interface TripDescriptor {
  trip_id: string;
  start_time?: string;
  end_time?: string;
}
interface entitySelector {
  agency_id?: string;
  route_id?: string;
  route_type?: number;
  stop_id?: string;
  trip?: TripDescriptor;
}
const enum Cause {
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
const enum Effect {
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
interface translatedString {
  text: string;
  language: string;
}
export interface Alert {
  timeRange: timeRange;
  entitySelector: Array<entitySelector>;
  cause: cause;
  effect: effect;
  url: string;
  translatedString: translatedString;
}
export interface GTFSRealtime {
  status: string;
  response: {
    header: {
      timestamp: number;
      gtfs_realtime_version: string;
      incrementality: number;
    };
    entity: Entity[];
  };
}
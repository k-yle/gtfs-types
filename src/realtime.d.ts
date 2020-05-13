export const enum Occupancy {
  EMPTY,
  MANY_SEATS_AVAILABLE,
  FEW_SEATS_AVAILABLE,
  STANDING_ROOM_ONLY,
  CRUSHED_STANDING_ROOM_ONLY,
  FULL,
  NOT_ACCEPTING_PASSENGERS,
  UNKNOWN,
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

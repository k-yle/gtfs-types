import { VehicleType } from "./vehicle-types";

// enums

export const enum GTFSBool {
  NOT_SPECIFIED,
  YES,
  NO,
}
export const enum Alight {
  NOT_AVAILABLE,
  MUST_CONTACT_AGENCY,
  MUST_CONTACT_DRIVER,
}

export const enum ExceptionType {
  SERVICE_ADDED = 1,
  SERVICE_REMOVED,
}

export const enum TransferType {
  RECCOMMENDED = 0,
  TIMED_TRANSFER,
  TIME_REQUIRED,
  NO_TRANSFER_POSSIBLE,
}

export const enum LocationType {
  STOP = 0,
  STATION,
  ENTRANCE_EXIST,
  GENERIC_NODE,
  BOARDING_AREA
}

export const enum WheelchairBoardingType {
  UNKNOWN_OR_INHERIT = 0,
  ACCESSIBLE,
  NOT_ACCESSIBLE
}

export const enum PickupDropoffType {
  CONTINUOUS = 0,
  NON_CONTINUOUS,
  MUST_CONTACT_AGENCY,
  MUST_CONTACT_DRIVER
}

// files

export interface Agency {
  agency_id?: string;
  agency_name: string;
  agency_url: string;
  agency_timezone: string;
  agency_lang?: string;
  agency_phone?: string;
  agency_fare_url?: string;
  agency_email?: string;
}

export interface Stop {
  stop_id: string;
  stop_code?: string;
  stop_name?: string;
  stop_desc?: string;
  stop_lat?: number;
  stop_lon?: number;
  zone_id?: string;
  stop_url?: string;
  location_type?: LocationType;
  parent_station?: string;
  stop_timezone?: string;
  wheelchair_boarding?: WheelchairBoardingType | '';
  level_id?: string;
  platform_code?: string;
}

export interface Route {
  route_id: string;
  agency_id?: string;
  route_short_name?: string;
  route_long_name?: string;
  route_desc?: string;
  route_type: VehicleType;
  route_url?: string;
  route_color?: string;
  route_text_color?: string;
  route_sort_order?: number;
  continuous_pickup?: PickupDropoffType | '';
  continuous_drop_off?: PickupDropoffType | '';
}

export interface Trip {
  route_id: string;
  service_id: string;
  trip_id: string;
  trip_headsign: string;
  direction_id: 0 | 1;
  block_id: string;
  shape_id: string;
  wheelchair_accessible: GTFSBool;
  bikes_allowed: GTFSBool;
}

export interface StopTime {
  trip_id: string;
  arrival_time: string;
  departure_time: string;
  stop_id: string;
  stop_sequence: number;
  stop_headsign: string;
  pickup_type: Alight;
  drop_off_type: Alight;
  shape_dist_traveled: number;
  timepoint: 0 | 1;
}

export interface Calendar {
  service_id: string;
  monday: 1 | 0;
  tuesday: 1 | 0;
  wednesday: 1 | 0;
  thursday: 1 | 0;
  friday: 1 | 0;
  saturday: 1 | 0;
  sunday: 1 | 0;
  start_date: string;
  end_date: string;
}

export interface CalendarDates {
  service_id: string;
  date: string;
  exception_type: ExceptionType;
}

export interface Shapes {
  shape_id: string;
  shape_pt_lat: number;
  shape_pt_lon: number;
  shape_pt_sequence: number;
  shape_dist_traveled: number;
}

export interface Frequencies {
  trip_id: string;
  start_time: string;
  end_time: string;
  headway_secs: number;
  exact_times: 0 | 1;
}

export interface Transfers {
  from_stop_id: string;
  to_stop_id: string;
  transfer_type: TransferType;
  min_transfer_time: number;
}

export interface FeedInfo {
  feed_publisher_name: string;
  feed_publisher_url: string;
  feed_lang: string;
  default_lang: string;
  feed_start_date: string;
  feed_end_date: string;
  feed_version: string;
  feed_contact_email: string;
  feed_contact_url: string;
}

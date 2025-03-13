import { VehicleType } from "./vehicle-types.def";

// MARK: ids

// currently we don't use nominal types in this repository,
// so these types are just aliases for readability.
export type AgencyId = string;
export type AttributionId = string;
export type BlockId = string;
export type FareId = string;
export type LevelId = string;
export type PathwayId = string;
export type RouteId = string;
export type ServiceId = string;
export type ShapeId = string;
export type StopId = string;
export type TripId = string;
export type ZoneId = string;

// MARK: enums

export enum GTFSBool {
  NOT_SPECIFIED,
  YES,
  NO,
}
export enum Alight {
  AVAILABLE = 0,
  NOT_AVAILABLE,
  MUST_CONTACT_AGENCY,
  MUST_CONTACT_DRIVER,
}

export enum ExceptionType {
  SERVICE_ADDED = 1,
  SERVICE_REMOVED,
}

export enum TransferType {
  RECOMMENDED,
  /** @deprecated typo, use {@link RECOMMENDED} */
  RECCOMMENDED = 0,
  TIMED_TRANSFER,
  TIME_REQUIRED,
  NO_TRANSFER_POSSIBLE,
  IN_SEAT_TRANSFER,
  RE_BOARD_TRANSFER,
}

export enum LocationType {
  STOP = 0,
  STATION,
  ENTRANCE_EXIT,
  /** @deprecated typo, use {@link ENTRANCE_EXIT} */
  ENTRANCE_EXIST = 2,
  GENERIC_NODE,
  BOARDING_AREA,
}

export enum WheelchairBoardingType {
  UNKNOWN_OR_INHERIT = 0,
  ACCESSIBLE,
  NOT_ACCESSIBLE,
}

export enum PickupDropoffType {
  CONTINUOUS = 0,
  NON_CONTINUOUS,
  MUST_CONTACT_AGENCY,
  MUST_CONTACT_DRIVER,
}

export enum PaymentMethod {
  PAID_ON_BOARD,
  PAID_BEFORE_BOARDING,
}

export enum TransfersNumber {
  NO_TRANSFERS_PERMITTED,
  RIDERS_MAY_TRANSFER_ONCE,
  RIDERS_MAY_TRANSFER_TWICE,
  UNLIMITED_TRANSFERS_ARE_PERMITTED = "",
}

export enum PathwayMode {
  WALKWAY = 1,
  STAIRS,
  MOVING_SIDEWALK_TRAVELATOR,
  ESCALATOR,
  ELEVATOR,
  FARE_PAYMENT_GATE,
  EXIT_GATE,
}

export enum TranslationsTableName {
  AGENCY = "agency",
  STOPS = "stops",
  ROUTES = "routes",
  TRIPS = "trips",
  STOP_TIMES = "stop_times",
  FEED_INFO = "feed_info",
  PATHWAYS = "pathways",
  LEVELS = "levels",
  ATTRIBUTIONS = "attributions",
}

// MARK: files

export interface Agency {
  agency_id?: AgencyId;
  agency_name: string;
  agency_url: string;
  agency_timezone: string;
  agency_lang?: string;
  agency_phone?: string;
  agency_fare_url?: string;
  agency_email?: string;
}

export interface Stop {
  stop_id: StopId;
  stop_code?: string;
  stop_name?: string;
  stop_desc?: string;
  stop_lat?: number;
  stop_lon?: number;
  zone_id?: ZoneId;
  stop_url?: string;
  location_type?: LocationType;
  parent_station?: string;
  stop_timezone?: string;
  wheelchair_boarding?: WheelchairBoardingType | "";
  level_id?: LevelId;
  platform_code?: string;
}

export interface Route {
  route_id: RouteId;
  agency_id?: AgencyId;
  route_short_name?: string;
  route_long_name?: string;
  route_desc?: string;
  route_type: VehicleType;
  route_url?: string;
  route_color?: string;
  route_text_color?: string;
  route_sort_order?: number;
  continuous_pickup?: PickupDropoffType | "";
  continuous_drop_off?: PickupDropoffType | "";
}

export interface Trip {
  route_id: RouteId;
  service_id: ServiceId;
  trip_id: TripId;
  trip_headsign?: string;
  trip_short_name?: string;
  direction_id?: 0 | 1;
  block_id?: BlockId;
  shape_id?: ShapeId;
  wheelchair_accessible?: GTFSBool;
  bikes_allowed?: GTFSBool;
}

export interface StopTime {
  trip_id: TripId;
  arrival_time?: string;
  departure_time?: string;
  stop_id: StopId;
  stop_sequence: number;
  stop_headsign?: string;
  pickup_type?: Alight;
  drop_off_type?: Alight;
  continuous_pickup?: Alight;
  continuous_drop_off?: Alight;
  shape_dist_traveled?: number;
  timepoint?: 0 | 1 | "";
}

export interface Calendar {
  service_id: ServiceId;
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
  service_id: ServiceId;
  date: string;
  exception_type: ExceptionType;
}

export interface FareAttributes {
  fare_id: FareId;
  price: number;
  currency_type: string;
  payment_method: PaymentMethod;
  transfers: TransfersNumber;
  agency_id?: AgencyId;
  transfer_duration?: number;
}

export interface FareRules {
  fare_id: FareId;
  route_id?: RouteId;
  origin_id?: ZoneId;
  destination_id?: ZoneId;
  contains_id?: ZoneId;
}

export interface Shapes {
  shape_id: ShapeId;
  shape_pt_lat: number;
  shape_pt_lon: number;
  shape_pt_sequence: number;
  shape_dist_traveled?: number;
}

export interface Frequencies {
  trip_id: TripId;
  start_time: string;
  end_time: string;
  headway_secs: number;
  exact_times?: 0 | 1 | "";
}

export interface Transfers {
  from_stop_id: StopId;
  to_stop_id: StopId;
  transfer_type: TransferType;
  min_transfer_time: number;
}

export interface Pathways {
  pathway_id: PathwayId;
  from_stop_id: StopId;
  to_stop_id: StopId;
  pathway_mode: PathwayMode;
  is_bidirectional: 0 | 1;
  length?: number;
  traversal_time?: number;
  stair_count?: number;
  max_slope?: number;
  min_width?: number;
  signposted_as?: string;
  reversed_signposted_as?: string;
}

export interface Levels {
  level_id: LevelId;
  level_index: number;
  level_name?: string;
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

export interface Translations {
  table_name: TranslationsTableName;
  field_name: string;
  language: string;
  translation: string;
  record_id?:
    | AgencyId
    | StopId
    | RouteId
    | TripId
    | PathwayId
    | LevelId
    | AttributionId;
  record_sub_id?: string;
  field_value?: string;
}

export interface Attributions {
  attribution_id?: AttributionId;
  agency_id?: AgencyId;
  route_id?: RouteId;
  trip_id?: TripId;
  organization_name: string;
  is_producer?: 0 | 1 | "";
  is_operator?: 0 | 1 | "";
  is_authority?: 0 | 1 | "";
  attribution_url?: string;
  attribution_email?: string;
  attribution_phone?: string;
}

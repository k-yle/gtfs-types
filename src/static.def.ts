import { VehicleType } from "./vehicle-types.def";

// MARK: ids

// currently we don't use nominal types in this repository,
// so these types are just aliases for readability.
export type AgencyId = string;
export type AreaId = string;
export type AttributionId = string;
export type BlockId = string;
export type BookingRuleId = string;
export type FareId = string;
export type FareMediaId = string;
export type FareProductId = string;
export type LegGroupId = string;
export type LevelId = string;
export type LocationGroupId = string;
export type NetworkId = string;
export type PathwayId = string;
export type RiderCategoryId = string;
export type RouteId = string;
export type ServiceId = string;
export type ShapeId = string;
export type StopId = string;
export type TimeframeGroupId = string;
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

export enum FareMediaType {
  NONE,
  PHYSICAL_TICKET,
  PHYSICAL_CARD,
  CONTACTLESS_EMV,
  MOBILE_APP,
}

export enum BookingType {
  REAL_TIME,
  SAME_DAY,
  PRIOR_DAY,
}

export enum DurationLimit {
  DEPARTURE_TO_ARRIVAL,
  DEPARTURE_TO_DEPARTURE,
  ARRIVAL_TO_DEPARTURE,
  ARRIVAL_TO_ARRIVAL,
}

export enum FareTransferType {
  LEG_TRANSFER,
  LEG_TRANSFER_LEG,
  TRANSFER,
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
  from_route_id?: RouteId;
  to_route_id?: RouteId;
  from_trip_id?: TripId;
  to_trip_id?: TripId;
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

export interface Timeframe {
  timeframe_group_id: TimeframeGroupId;
  start_time?: string;
  end_time?: string;
  service_id: ServiceId;
}

export interface RiderCategory {
  rider_category_id: RiderCategoryId;
  rider_category_name: string;
  is_default_fare_category: 0 | 1;
  eligibility_url: string;
}

export interface FareMedia {
  fare_media_id: FareMediaId;
  fare_media_name?: string;
  fare_media_type: FareMediaType;
}

export interface FareProduct {
  fare_product_id: FareProductId;
  fare_product_name?: string;
  rider_category_id?: RiderCategoryId;
  fare_media_id?: FareMediaId;
  ammount: number;
  currency: string;
}

export interface FareLegRule {
  leg_group_id?: LegGroupId;
  network_id?: NetworkId;
  from_area_id?: AreaId;
  to_area_id?: AreaId;
  from_timeframe_group_id?: TimeframeGroupId;
  to_timeframe_group_id?: TimeframeGroupId;
  fare_product_id: FareProductId;
  rule_priority?: number;
}

export interface FareLegJoinRule {
  from_network_id: NetworkId;
  to_network_id: NetworkId;
  from_stop_id?: StopId;
  to_stop_id?: StopId;
}

export interface FareTransferRule {
  from_leg_group_id?: LegGroupId;
  to_leg_group_id?: LegGroupId;
  transfer_count?: number;
  duration_limit?: number;
  duration_limit_type?: DurationLimit;
  fare_transfer_type?: FareTransferType;
  fare_product_id?: FareProductId;
}

export interface Area {
  area_id: AreaId;
  area_name?: string;
}

export interface StopArea {
  area_id: AreaId;
  stop_id: string;
}

export interface Network {
  network_id: NetworkId;
  network_name?: string;
}

export interface RouteNetwork {
  network_id: NetworkId;
  route_id: RouteId;
}

export interface LocationGroup {
  location_group_id: LocationGroupId;
  location_group_name?: string;
}

export interface LocationGroupStop {
  location_group_id: LocationGroupId;
  stop_id: StopId;
}

export interface BookingRule {
  booking_rule_id: BookingRuleId;
  booking_type: BookingType;
  prior_notice_duration_min: number;
  prior_notice_duration_max: number;
  prior_notice_last_day?: number;
  prior_notice_last_time?: string;
  prior_notice_start_day?: number;
  prior_notice_start_time?: string;
  prior_notice_service_id?: ServiceId;
  message?: string;
  pickup_message?: string;
  drop_off_message?: string;
  phone_number?: string;
  info_url?: string;
  booking_url?: string;
}

/** map between the file name and schema for each table */
export interface GtfsFiles {
  "agency.txt": Agency;
  "calendar.txt": Calendar;
  "calendar_dates.txt": CalendarDates;
  "fare_rules.txt": FareRules;
  "fare_attributes.txt": FareAttributes;
  "feed_info.txt": FeedInfo;
  "frequencies.txt": Frequencies;
  "pathways.txt": Pathways;
  "routes.txt": Route;
  "shapes.txt": Shapes;
  "stops.txt": Stop;
  "stop_times.txt": StopTime;
  "transfers.txt": Transfers;
  "trips.txt": Trip;
  "timeframes.txt": Timeframe;
  "rider_categories.txt": RiderCategory;
  "fare_media.txt": FareMedia;
  "fare_products.txt": FareProduct;
  "fare_leg_rules.txt": FareLegRule;
  "fare_leg_join_rules.txt": FareLegJoinRule;
  "fare_transfer_rules.txt": FareTransferRule;
  "areas.txt": Area;
  "stop_areas.txt": StopArea;
  "networks.txt": Network;
  "route_networks.txt": RouteNetwork;
  "levels.txt": Levels;
  "location_groups.txt": LocationGroup;
  "location_group_stops.txt": LocationGroupStop;
  "booking_rules.txt": BookingRule;
  "translations.txt": Translations;
  "attributions.txt": Attributions;
}

/** same as {@link Table}, except with a `.txt` suffix */
export type GtfsFile = keyof GtfsFiles;

/** same as {@link GtfsFile}, except without the `.txt` suffix */
export type Table = keyof GtfsFiles extends `${infer T}.txt` ? T : never;

/**
 * - if it's a `string`, then the table has 1 primary key
 * - if it's a `string[]`, then the primary key spans multiple columns
 * - if it's `undefined`, then the table has no primary keys
 */
export const PRIMARY_KEYS = {
  "agency.txt": "agency_id",
  "calendar.txt": "service_id",
  "calendar_dates.txt": ["service_id", "date"],
  "fare_attributes.txt": "fare_id",
  "fare_rules.txt": undefined,
  "feed_info.txt": undefined,
  "frequencies.txt": ["trip_id", "start_time"],
  "routes.txt": "route_id",
  "shapes.txt": ["shape_id", "shape_pt_sequence"],
  "stops.txt": "stop_id",
  "stop_times.txt": ["trip_id", "stop_sequence"],
  "transfers.txt": [
    "from_stop_id",
    "to_stop_id",
    "from_trip_id",
    "to_trip_id",
    "from_route_id",
    "to_route_id",
  ],
  "trips.txt": "trip_id",
  "pathways.txt": "pathway_id",
  "timeframes.txt": undefined,
  "rider_categories.txt": "rider_category_id",
  "fare_media.txt": "fare_media_id",
  "fare_products.txt": "fare_product_id",
  "fare_leg_rules.txt": [
    "network_id",
    "from_area_id",
    "to_area_id",
    "from_timeframe_group_id",
    "to_timeframe_group_id",
    "fare_product_id",
  ],
  "fare_leg_join_rules.txt": [
    "from_network_id",
    "to_network_id",
    "from_stop_id",
    "to_stop_id",
  ],
  "fare_transfer_rules.txt": [
    "from_leg_group_id",
    "to_leg_group_id",
    "fare_product_id",
    "transfer_count",
    "duration_limit",
  ],
  "areas.txt": "area_id",
  "stop_areas.txt": ["area_id", "stop_id"],
  "networks.txt": "network_id",
  "route_networks.txt": "route_id",
  "levels.txt": "level_id",
  "location_groups.txt": "location_group_id",
  "location_group_stops.txt": ["location_group_id", "stop_id"],
  "booking_rules.txt": "booking_rule_id",
  "translations.txt": [
    "table_name",
    "field_name",
    "language",
    "record_id",
    "record_sub_id",
    "field_value",
  ],
  "attributions.txt": "attribution_id",
} satisfies {
  [T in keyof GtfsFiles]:
    | keyof GtfsFiles[T]
    | (keyof GtfsFiles[T])[]
    | undefined;
};

export type NonStringDataTypes = "float" | "int";

/** lists the fields with a non-string data type (see {@link NonStringDataTypes}) */
export const DB_SCHEMA = {
  "agency.txt": {},
  "calendar.txt": {
    monday: "int",
    tuesday: "int",
    wednesday: "int",
    thursday: "int",
    friday: "int",
    saturday: "int",
    sunday: "int",
  },
  "calendar_dates.txt": {
    exception_type: "int",
  },
  "fare_attributes.txt": {
    payment_method: "int",
    price: "float",
    transfer_duration: "int",
  },
  "fare_rules.txt": {},
  "feed_info.txt": {},
  "frequencies.txt": {
    headway_secs: "int",
  },
  "routes.txt": {
    route_sort_order: "int",
    route_type: "int",
  },
  "shapes.txt": {
    shape_dist_traveled: "float",
    shape_pt_lat: "float",
    shape_pt_lon: "float",
    shape_pt_sequence: "int",
  },
  "stops.txt": {
    location_type: "int",
    stop_lat: "float",
    stop_lon: "float",
  },
  "stop_times.txt": {
    continuous_drop_off: "int",
    continuous_pickup: "int",
    drop_off_type: "int",
    pickup_type: "int",
    shape_dist_traveled: "float",
    stop_sequence: "int",
  },
  "transfers.txt": {
    min_transfer_time: "int",
    transfer_type: "int",
  },
  "trips.txt": {
    bikes_allowed: "int",
    direction_id: "int",
    wheelchair_accessible: "int",
  },
  "pathways.txt": {
    is_bidirectional: "int",
    length: "int",
    max_slope: "int",
    min_width: "int",
    pathway_mode: "int",
    stair_count: "int",
    traversal_time: "int",
  },
  "timeframes.txt": {},
  "rider_categories.txt": {
    is_default_fare_category: "int",
  },
  "fare_media.txt": {
    fare_media_type: "int",
  },
  "fare_products.txt": {
    ammount: "int",
  },
  "fare_leg_rules.txt": {
    rule_priority: "int",
  },
  "fare_leg_join_rules.txt": {},
  "fare_transfer_rules.txt": {
    duration_limit: "int",
    duration_limit_type: "int",
    fare_transfer_type: "int",
    transfer_count: "int",
  },
  "areas.txt": {},
  "stop_areas.txt": {},
  "networks.txt": {},
  "route_networks.txt": {},
  "levels.txt": {
    level_index: "float",
  },
  "location_groups.txt": {},
  "location_group_stops.txt": {},
  "booking_rules.txt": {
    booking_type: "int",
    prior_notice_duration_max: "int",
    prior_notice_duration_min: "int",
    prior_notice_last_day: "int",
    prior_notice_start_day: "int",
  },
  "translations.txt": {},
  "attributions.txt": {},
} satisfies {
  // this insanity is only evaluated at compile-time; the compiled files
  // do not include the `satisfies` clause, so there is no performance
  // impact to downstream consumers.
  [File in keyof GtfsFiles]: {
    [_ in {
      [Field in keyof GtfsFiles[File]]: Required<
        GtfsFiles[File]
      >[Field] extends number
        ? Field
        : never;
    }[keyof GtfsFiles[File]]]: NonStringDataTypes;
  };
};

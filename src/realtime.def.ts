import {
  AgencyId,
  LevelId,
  RouteId,
  ShapeId,
  StopId,
  TripId,
  WheelchairBoardingType,
  ZoneId,
  type Alight,
} from "./static.def";

export enum Occupancy {
  EMPTY,
  MANY_SEATS_AVAILABLE,
  FEW_SEATS_AVAILABLE,
  STANDING_ROOM_ONLY,
  CRUSHED_STANDING_ROOM_ONLY,
  FULL,
  NOT_ACCEPTING_PASSENGERS,
  NO_DATA_AVAILABLE,
  NOT_BOARDABLE,
}

export enum Congestion {
  UNKNOWN_CONGESTION_LEVEL,
  RUNNING_SMOOTHLY,
  STOP_AND_GO,
  CONGESTION,
  SEVERE_CONGESTION,
}

declare interface Time {
  delay?: number;
  time?: number;
  uncertainty?: number;
  scheduled_time?: number;
}

export interface ModifiedTripSelector {
  modifications_id: string;
  affected_trip_id: TripId;
  start_time?: string;
  start_date?: string;
}

interface RealTimeTrip {
  trip_id?: TripId;
  start_time?: string;
  start_date?: string;
  schedule_relationship?: TripScheduleRelationship;
  route_id?: RouteId;
  direction_id?: number;
  modified_trip?: ModifiedTripSelector;
}

export enum TripScheduleRelationship {
  SCHEDULED,
  /**
   * @deprecated because the behaviour of this value was unspecified
   * @see {@link https://gtfs.org/documentation/realtime/examples/migration-duplicated}
   */
  ADDED,
  UNSCHEDULED,
  CANCELED,
  REPLACEMENT = 5,
  DUPLICATED,
  DELETED,
  NEW,
}

export enum StopTimeUpdateScheduleRelationship {
  SCHEDULED,
  SKIPPED,
  NO_DATA,
  UNSCHEDULED,
}

export enum WheelchairAccessible {
  NO_VALUE,
  UNKNOWN,
  WHEELCHAIR_ACCESSIBLE,
  WHEELCHAIR_INACCESSIBLE,
}

export interface Vehicle {
  id?: string;
  label?: string;
  license_plate?: string;
  wheelchair_accessible?: WheelchairAccessible;
}

export interface TripProperties {
  trip_id?: TripId;
  start_date?: string;
  start_time?: string;
  shape_id?: ShapeId;
  trip_headsign?: string;
  trip_short_name?: string;
}

export interface TripUpdate {
  trip: RealTimeTrip;
  stop_time_update?: StopTimeUpdate[];
  vehicle?: Vehicle;
  timestamp?: number;
  delay?: number;
  trip_properties?: TripProperties;
}

export interface CarriageDetails {
  id?: string;
  label?: string;
  occupancy_status?: Occupancy;
  occupancy_percentage?: number;
  carriage_sequence: number;
}

export interface VehiclePosition {
  trip?: RealTimeTrip;
  position?: Position;
  current_stop_sequence?: number;
  stop_id?: StopId;
  current_status?: VehicleStopStatus;
  congestion_level?: Congestion;
  occupancy_status?: Occupancy;
  occupancy_percentage?: number;
  multi_carriage_details?: CarriageDetails[];
  vehicle?: Vehicle;
  timestamp?: number;
}

export interface Entity {
  id: string;
  trip_update?: TripUpdate;
  vehicle?: VehiclePosition;
  is_deleted?: boolean;
  alert?: Alert;
  shape?: RealTimeShape;
  stop?: RealTimeStop;
  trip_modifications?: TripModifications;
}

export interface TimeRange {
  start?: number;
  end?: number;
}

export enum Cause {
  UNKNOWN_CAUSE = 1,
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
  SPECIAL_EVENT,
}

export enum Effect {
  NO_SERVICE = 1,
  REDUCED_SERVICE,
  SIGNIFICANT_DELAYS,
  DETOUR,
  ADDITIONAL_SERVICE,
  MODIFIED_SERVICE,
  OTHER_EFFECT,
  UNKNOWN_EFFECT,
  STOP_MOVED,
  NO_EFFECT,
  ACCESSIBILITY_ISSUE,
}

export enum SeverityLevel {
  UNKNOWN_SEVERITY = 1,
  INFO,
  WARNING,
  SEVERE,
}

export interface TranslatedString {
  translation: Translation[];
}

export interface Translation {
  text: string;
  language?: string;
}

export interface LocalizedImage {
  url: string;
  media_type: string;
  language?: string;
}

export interface TranslatedImage {
  localized_image: LocalizedImage[];
}

export interface Alert {
  /**
   * @deprecated use `communication_period` and `impact_period` instead
   * @see {@link https://gtfs.org/documentation/realtime/examples/migration-active-period}
   */
  active_period?: TimeRange[];
  communication_period?: TimeRange[];
  impact_period?: TimeRange[];
  informed_entity: EntitySelector[];
  cause?: Cause;
  effect?: Effect;
  url?: TranslatedString;
  header_text: TranslatedString;
  description_text: TranslatedString;
  tts_header_text?: TranslatedString;
  tts_description_text?: TranslatedString;
  severity_level?: SeverityLevel;
  image?: TranslatedImage;
  image_alternative_text?: TranslatedString;
  cause_detail?: TranslatedString;
  effect_detail?: TranslatedString;
}

export interface Position {
  latitude: number;
  longitude: number;
  bearing?: number;
  odometer?: number;
  speed?: number;
}

export interface StopTimeProperties {
  assigned_stop_id?: StopId;
  stop_headsign?: string;
  pickup_type?: Alight;
  drop_off_type?: Alight;
}

export interface StopTimeUpdate {
  stop_sequence?: number;
  stop_id?: StopId;
  arrival?: Time;
  departure?: Time;
  departure_occupancy_status?: Occupancy;
  schedule_relationship?: StopTimeUpdateScheduleRelationship;
  stop_time_properties?: StopTimeProperties;
}

export interface EntitySelector {
  agency_id?: AgencyId;
  route_id?: RouteId;
  route_type?: number;
  direction_id?: number;
  trip?: RealTimeTrip;
  stop_id?: StopId;
}

export enum VehicleStopStatus {
  INCOMING_AT,
  STOPPED_AT,
  IN_TRANSIT_TO,
}

export enum Incrementality {
  FULL_DATASET,
  DIFFERENTIAL,
}

export interface FeedHeader {
  gtfs_realtime_version: string;
  incrementality: Incrementality;
  timestamp: number;
  feed_version?: string;
}

/** a shape, which is not necessarily in the static GTFS feed */
export interface RealTimeShape {
  shape_id: ShapeId;
  /** encoded using the Google Polyline Algorithm */
  encoded_polyline: string;
}

/** a stop, which is not necessarily in the static GTFS feed */
export interface RealTimeStop {
  stop_id: StopId;
  stop_code?: TranslatedString;
  stop_name: TranslatedString;
  tts_stop_name?: TranslatedString;
  stop_desc?: TranslatedString;
  stop_lat: number;
  stop_lon: number;
  zone_id?: ZoneId;
  stop_url?: TranslatedString;
  parent_station?: StopId;
  stop_timezone?: string;
  wheelchair_boarding?: WheelchairBoardingType;
  level_id?: LevelId;
  platform_code?: TranslatedString;
}

export interface StopSelector {
  stop_sequence?: number;
  stop_id?: StopId;
}

export interface ReplacementStop {
  travel_time_to_stop?: number;
  stop_id: StopId;
}

export interface Modification {
  start_stop_selector: StopSelector;
  end_stop_selector?: StopSelector;
  propagated_modification_delay?: number;
  replacement_stops?: ReplacementStop[];
  service_alert_id?: string;
  last_modified_time?: number;
}

export interface SelectedTrips {
  trip_ids: TripId[];
  shape_id: ShapeId;
}

export interface TripModifications {
  selected_trips: SelectedTrips[];
  start_times?: string[];
  service_dates: string[];
  modifications: Modification[];
}

export interface FeedMessage {
  header: FeedHeader;
  entity?: Entity[];
}

export interface GTFSRealtime {
  status: string;
  response: FeedMessage;
}

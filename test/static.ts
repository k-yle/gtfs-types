/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, no-unused-vars */
import { Agency, Route, Stop, Trip, VehicleType, GTFSBool } from "..";

const myRoute: Route = {
  // @ts-expect-error numbers are invalid
  route_id: 123456,
  agency_id: "Metlink",
  route_short_name: "24",
  route_long_name: "Crofton Downs to Box Hill",
  route_type: VehicleType.BUS,
  route_url: "https://at.govt.nz",
  route_color: "#1e90ff",
  route_text_color: "#fff",
};

const agency: Agency = {
  agency_id: "abc",
  agency_name: "GWRC",
  agency_url: "https://metlink.org.nz",
  agency_timezone: "UTC+12",
  agency_lang: "en",
  agency_phone: "09 301 0101",
  agency_fare_url: "https://metlink.org.nz/tickets",
};

const stop: Stop = {
  stop_id: "3235",
  stop_code: "3235",
  stop_name: "Takapuna Grammar",
  stop_desc: "Lake Road opposite Takapuna Grammar",
  stop_lat: -36.123,
  stop_lon: 174.123,
  zone_id: "abc",
  stop_url: "https://at.govt.nz",
  location_type: 1,
  parent_station: "40910",
  stop_timezone: "UTC+13",
};

const trip: Trip = {
  route_id: "sdf",
  service_id: "acsdfc",
  trip_id: "sdfs",
  trip_headsign: "Mātiatia",
  direction_id: 1,
  block_id: "abc",
  shape_id: "asd",
  wheelchair_accessible: GTFSBool.YES,
  bikes_allowed: GTFSBool.NOT_SPECIFIED,
};

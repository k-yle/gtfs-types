import { GTFSRealtime } from "..";

const APIResponse: GTFSRealtime = {
  status: "OK",
  response: {
    header: {
      timestamp: 1598512657.187,
      gtfs_realtime_version: "1.0",
      incrementality: 0,
    },
    entity: [
      {
        id: "472197624-20200821113649_v94.23",
        trip_update: {
          trip: {
            trip_id: "472197624-20200821113649_v94.23",
            start_time: "17:20:00",
            start_date: "20200827",
            schedule_relationship: 0,
            route_id: "02710-20200821113649_v94.23",
            direction_id: 1,
          },
          stop_time_update: [{
            stop_sequence: 23,
            arrival: {
              delay: -1023,
              time: 1598506677,
              uncertainty: 0,
            },
            stop_id: "8532-20200821113649_v94.23",
            schedule_relationship: 0,
          }],
          vehicle: {
            id: "12426",
            label: "NB2426",
            license_plate: "CKJ348",
          },
          timestamp: 1598509333,
          delay: 0,
        },
        is_deleted: false,
      },
      {
        id: "24303",
        vehicle: {
          trip: {
            trip_id: "1140215321-20200821113649_v94.23",
            start_time: "18:50:00",
            start_date: "20200827",
            schedule_relationship: 0,
            route_id: "03508-20200821113649_v94.23",
            direction_id: 1,
          },
          position: {
            latitude: -36.99360166666666,
            longitude: 174.87862,
            bearing: "128",
            odometer: 974250608,
            speed: 0,
          },
          timestamp: 1598512448,
          vehicle: {
            id: "24303",
            label: "HE0303",
            license_plate: "CYW102",
          },
          occupancy_status: 0,
        },
        is_deleted: false,
      },
    ],
  },
};

import { StateData } from "../types/map.types";

export const usStatesData: StateData[] = [
  {
    name: "California",
    abbreviation: "CA",
    bounds: [
      [32.5343, -124.4096],
      [42.0095, -114.1308],
    ],
    center: [36.7783, -119.4179],
  },
  {
    name: "Texas",
    abbreviation: "TX",
    bounds: [
      [25.8371, -106.6456],
      [36.5007, -93.5083],
    ],
    center: [31.9686, -99.9018],
  },
  {
    name: "New York",
    abbreviation: "NY",
    bounds: [
      [40.4774, -79.7624],
      [45.0159, -71.7784],
    ],
    center: [43.0, -75.0],
  },
  {
    name: "Florida",
    abbreviation: "FL",
    bounds: [
      [24.5211, -87.6349],
      [31.0035, -80.0313],
    ],
    center: [27.6648, -81.5158],
  },
  // Add more states as needed
];

// Country options
export const COUNTRIES = [
  { label: "India", value: "india" },
  { label: "United States", value: "usa" },
  { label: "Germany", value: "germany" },
  { label: "Japan", value: "japan" }
];

// Cities (dependent dropdown example)
export const CITIES_BY_COUNTRY = {
  india: ["Mumbai", "Delhi", "Pune", "Bangalore"],
  usa: ["New York", "San Francisco", "Austin"],
  germany: ["Berlin", "Munich", "Hamburg"],
  japan: ["Tokyo", "Osaka", "Kyoto"]
};

// Things you enjoy (multi-select)
export const THINGS_YOU_ENJOY = [
  { label: "Travel", value: "travel" },
  { label: "Gaming", value: "gaming" },
  { label: "Cooking", value: "cooking" },
  { label: "Photography", value: "photography" },
  { label: "Reading", value: "reading" }
];

// Weekend activities (checkbox)
export const WEEKEND_ACTIVITIES = [
  { label: "Movies", value: "movies" },
  { label: "Hiking", value: "hiking" },
  { label: "Gaming", value: "gaming" },
  { label: "Hanging with friends", value: "friends" }
];

// Early bird / night owl
export const SLEEP_TYPE_OPTIONS = [
  { label: "Early Bird 🌅", value: "earlyBird" },
  { label: "Night Owl 🌙", value: "nightOwl" }
];

// Dog / Cat preference
export const PET_OPTIONS = [
  { label: "Dog Person 🐶", value: "dog" },
  { label: "Cat Person 🐱", value: "cat" }
];
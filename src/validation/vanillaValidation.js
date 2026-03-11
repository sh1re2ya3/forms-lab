export function validateForm(data) {
  const errors = {};

  // Basic info validation
  if (!data.basicInfo.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!data.basicInfo.email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (!data.basicInfo.password || data.basicInfo.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!data.basicInfo.birthDate) {
    errors.birthDate = "Birth date is required";
  }

  // Username check
  if (!data.basicInfo.username) {
    errors.username = "Username required";
  }

  // Location
  if (!data.location.country) {
    errors.country = "Please select a country";
  }

  if (!data.location.city) {
    errors.city = "Please select a city";
  }

  // Personality
  if (!data.personality.earlyBirdOrNightOwl) {
    errors.sleepType = "Please select one option";
  }

  if (!data.personality.petPreference) {
    errors.petPreference = "Please choose dog or cat";
  }

  // Lifestyle
  if (data.lifestyle.hobbiesCount < 0) {
    errors.hobbiesCount = "Number cannot be negative";
  }

  // Bucket list dynamic fields
  data.bucketList.forEach((item, index) => {
    if (!item.item.trim()) {
      errors[`bucketList-${index}`] = "Bucket list item cannot be empty";
    }
  });

  // Travel table validation
  data.travels.forEach((travel, index) => {
    if (!travel.place) {
      errors[`travel-place-${index}`] = "Place required";
    }

    if (!travel.year) {
      errors[`travel-year-${index}`] = "Year required";
    }
  });

  return errors;
}
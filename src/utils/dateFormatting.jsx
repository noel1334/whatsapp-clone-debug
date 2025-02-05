// src/utils/dateFormatting.js
import { format, isValid } from "date-fns";

// Function to format a date into a human-readable string
export const formatDate = (dateString) => {
  let date;

  // 1. Handle Date Objects and Strings
  if (typeof dateString === "string") {
    date = new Date(dateString);
  } else if (dateString instanceof Date) {
    date = dateString;
  } else {
    return "Invalid Date"; // Handle cases where input is not a string or Date object
  }

  // 2. Validate the Date
  if (!isValid(date)) {
    return "Invalid Date";
  }

  // Use a consistent date and time format
  return format(date, "MM/dd/yyyy HH:mm"); // e.g., "12/31/2023 23:59"
};

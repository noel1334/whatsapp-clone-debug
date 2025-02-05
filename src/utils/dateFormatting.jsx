export const formatDate = (dateString) => {
  const date = new Date(dateString); // Convert the string to a Date object
  const now = new Date();

  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24)); // Calculate the difference in days

  if (diffInDays === 0) {
    // Today: Show the time
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  } else if (diffInDays === 1) {
    // Yesterday
    return "Yesterday";
  } else if (diffInDays < 7) {
    // Within the last week: Show the day of the week
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  } else {
    // Older than a week: Show the date in a simple format (e.g., MM/DD/YYYY)
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
};

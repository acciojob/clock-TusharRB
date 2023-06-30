//your JS code here. If required.
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  const timer = document.getElementById("timer");

  // Function to update the timer
  function updateTimer() {
    const currentDate = new Date();

    // Get the current time and format it as HH:MM:SS
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
    const time = `${hours}:${minutes}:${seconds}`;

    // Get the current date and format it as Day, Month Date, Year
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const dateStr = `${dayOfWeek}, ${month} ${date}, ${year}`;

    // Update the timer text content
    timer.textContent = `Time: ${time} | Date: ${dateStr}`;
  }

  // Update the timer initially
  updateTimer();

  // Update the timer every second
  setInterval(updateTimer, 1000);
});

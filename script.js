// Set the date we're counting down to
const countdownDate = new Date("Jun 14, 2024 12:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with the corresponding IDs
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerText = "EXPIRED";
    }
}, 1000);

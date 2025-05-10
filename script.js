const countdown = document.getElementById("countdown");
const releaseDate = new Date("2025-05-23T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance < 0) {
        countdown.innerHTML = "Já está disponível!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

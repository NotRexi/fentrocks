document.addEventListener("DOMContentLoaded", function() {
    const serverIP = "fent.rocks"; // Your server IP
    const apiUrl = `https://api.mcsrvstat.us/2/${serverIP}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const playerCount = data.players.online;
            document.getElementById("online-players").textContent = `Online Players: ${playerCount}`;
        })
        .catch(error => {
            console.error("Error fetching server data:", error);
            document.getElementById("online-players").textContent = "Error fetching server data.";
        });
});

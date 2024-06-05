window.addEventListener("DOMContentLoaded", (event) => {
    // elements
    let currentHomeScore = 0;
    let currentHomeFouls = 0;
    let homeScoreElement = document.getElementById("home-score-number");
    let homeFoulElement = document.getElementById("fouls-number-1")

    let currentGuestScore = 0;
    let currentGuestFouls = 0;
    let guestScoreElement = document.getElementById("guest-score-number");
    let guestFoulElement = document.getElementById("fouls-number-2")

    let currentPeriod = 0
    let periodElement = document.getElementById("period-number")

    function UpdateHomePoints(event) {
        let points = parseInt(event.currentTarget.id); // parse int so that it doesn't get read as a string
        currentHomeScore += points;
        homeScoreElement.innerText = currentHomeScore;
    }
    function UpdateGuestPoints(event) {
        let points = parseInt(event.currentTarget.id); 
        currentGuestScore += points;
        guestScoreElement.innerText = currentGuestScore;
    }

    function UpdateHomeFouls(){
        currentHomeFouls += 1
        homeFoulElement.innerText = currentHomeFouls;
    }
    function UpdateGuestFouls(){
        currentGuestFouls += 1
        guestFoulElement.innerText = currentGuestFouls;
    }

    // buttons
    let homeButtons = document.querySelectorAll("div.home-panel > button.pt-btn")
    homeButtons.forEach(btn => {
        btn.addEventListener('click', UpdateHomePoints)
    });

    let guestButtons = document.querySelectorAll("div.guest-panel > button.pt-btn")
    guestButtons.forEach(btn => {
        btn.addEventListener('click', UpdateGuestPoints)
    });

    let homeFoulButton = document.querySelector("div.home-panel > #foul-btn")
    homeFoulButton.addEventListener("click", function(){
        UpdateHomeFouls();
    })

    let guestFoulButton = document.querySelector("div.guest-panel > #foul-btn")
    guestFoulButton.addEventListener("click", function(){
        UpdateGuestFouls();
    })

    let periodButton = document.getElementById("period-btn")
    periodButton.addEventListener("click", function(){
        currentPeriod += 1;
        periodElement.innerText = currentPeriod;
    })

    let resetButton = document.getElementById("reset-btn")
    resetButton.addEventListener("click", function(){
        currentHomeScore = 0;
        currentHomeFouls = 0;
        currentGuestScore = 0;
        currentGuestFouls = 0;
        currentPeriod = 0;

        homeScoreElement.innerText = currentHomeScore;
        homeFoulElement.innerText = currentHomeFouls;
        guestScoreElement.innerText = currentGuestScore;
        guestFoulElement.innerText = currentGuestFouls;
        periodElement.innerText = currentPeriod;
    })
})
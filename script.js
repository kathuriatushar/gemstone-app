function recommendGemstone() {

    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value;

    if (name === "" || dob === "") {
        alert("Please fill all fields");
        return;
    }

    let birthDate = new Date(dob);
    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate();

    let zodiac = "";
    let gemstone = "";
    let benefits = "";
    let emoji = "";

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiac = "Aries";
        gemstone = "Ruby";
        benefits = "Boosts confidence and leadership.";
        emoji = "♈";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiac = "Taurus";
        gemstone = "Emerald";
        benefits = "Brings prosperity and stability.";
        emoji = "♉";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiac = "Gemini";
        gemstone = "Pearl";
        benefits = "Improves communication and creativity.";
        emoji = "♊";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiac = "Cancer";
        gemstone = "Moonstone";
        benefits = "Provides emotional balance.";
        emoji = "♋";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiac = "Leo";
        gemstone = "Ruby";
        benefits = "Improves confidence and energy.";
        emoji = "♌";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiac = "Virgo";
        gemstone = "Emerald";
        benefits = "Enhances focus and intelligence.";
        emoji = "♍";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiac = "Libra";
        gemstone = "Diamond";
        benefits = "Promotes harmony and balance.";
        emoji = "♎";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiac = "Scorpio";
        gemstone = "Coral";
        benefits = "Provides courage and strength.";
        emoji = "♏";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiac = "Sagittarius";
        gemstone = "Yellow Sapphire";
        benefits = "Brings wisdom and success.";
        emoji = "♐";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiac = "Capricorn";
        gemstone = "Blue Sapphire";
        benefits = "Improves discipline and focus.";
        emoji = "♑";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiac = "Aquarius";
        gemstone = "Amethyst";
        benefits = "Enhances creativity and innovation.";
        emoji = "♒";
    } else {
        zodiac = "Pisces";
        gemstone = "Pearl";
        benefits = "Brings peace and intuition.";
        emoji = "♓";
    }

    document.getElementById("result").innerHTML = `
        <h2>Hello ${name}</h2>
        <h3>${emoji} ${zodiac}</h3>
        <p><strong>Gemstone:</strong> ${gemstone}</p>
        <p><strong>Benefits:</strong> ${benefits}</p>
    `;

    saveHistory(name, zodiac, gemstone);
}

function saveHistory(name, zodiac, gemstone) {

    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.push({
        name,
        zodiac,
        gemstone
    });

    if(history.length > 10){
        history.shift();
    }

    localStorage.setItem("history", JSON.stringify(history));

    displayHistory();
}

function displayHistory() {

    let history = JSON.parse(localStorage.getItem("history")) || [];

    let html = "";

    history.forEach(item => {
        html += `<p>${item.name} | ${item.zodiac} | ${item.gemstone}</p>`;
    });

    document.getElementById("history").innerHTML = html;
}

function clearHistory() {
    localStorage.removeItem("history");
    displayHistory();
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("result").innerHTML = "";
}

window.onload = displayHistory;
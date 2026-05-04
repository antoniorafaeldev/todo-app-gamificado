/*
    Oque preciso fazer:

    Pegar os dados que já tão no local storage e coloca nos texts contents

*/
const currentXpElement = document.getElementById("current-xp");
const neededXpElement = document.getElementById("needed-xp");
const levelElement = document.getElementById("level");
const progressBar = document.getElementById("progress-bar");

export function loadLevelInformation() {
    const savedCurrentXp = localStorage.getItem("currentXp");
    const savedXpNeeded = localStorage.getItem("xpNeeded");
    const savedLevel = localStorage.getItem("level");
    const savedProgressPercentage = localStorage.getItem("progressPercentage");
  

    if (savedCurrentXp !== null) {
        currentXpElement.textContent = parseInt(savedCurrentXp);
    }
    if (savedXpNeeded !== null) {
        neededXpElement.textContent = parseInt(savedXpNeeded);
    }
    if (savedLevel !== null) {
        levelElement.textContent = `Level ${parseInt(savedLevel)}`;
    }
    if (savedProgressPercentage !== null) {
        progressBar.style.width = parseInt(savedProgressPercentage) + "%";
    }

}
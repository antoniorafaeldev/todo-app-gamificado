
import { toggleIcons } from "./theme.js";

const currentXpElement = document.getElementById("current-xp");
const neededXpElement = document.getElementById("needed-xp");
const levelElement = document.getElementById("level");
const progressBar = document.getElementById("progress-bar");

export function initializeStats() {
    loadLevelInformation();
    loadThemePreference();
    loadUsername();
}

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

export function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
        toggleIcons(true);
    } else {
        document.documentElement.classList.remove('light');
    }

}

export function loadUsername() {
    const savedUsername = localStorage.getItem("username");
    const usernameElement = document.getElementById("username");

    if (savedUsername !== null) usernameElement.textContent = savedUsername;
}


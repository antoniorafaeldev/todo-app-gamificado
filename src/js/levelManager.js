const currentXpElement = document.getElementById("current-xp");
const neededXpElement = document.getElementById("needed-xp");
const levelElement = document.getElementById("level");
const progressBar = document.getElementById("progress-bar");

export let currentXp = localStorage.getItem("currentXp") ? parseInt(localStorage.getItem("currentXp")) : 0;
export let xpNeeded = localStorage.getItem("xpNeeded") ? parseInt(localStorage.getItem("xpNeeded")) : 100;
export let level = localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 1;

export function addXp(amount) {
  currentXp += amount;

  while (currentXp >= xpNeeded) {
    currentXp -= xpNeeded;
    level++;
    xpNeeded += 20;
  }
  updateLevelInformation();
  saveLevelInformation();
}

export function removeXp(amount) {
  currentXp -= amount;
  if (currentXp < 0) currentXp = 0;

  updateLevelInformation();
  saveLevelInformation();
}

export function updateLevelInformation() {
  currentXpElement.textContent = currentXp;
  neededXpElement.textContent = xpNeeded;
  levelElement.textContent = `Level ${level}`;

  const percentage = Math.max(0, Math.min(100, (currentXp / xpNeeded) * 100));
  progressBar.style.width = percentage + "%";
}

export function saveLevelInformation() {
  localStorage.setItem("currentXp", currentXp);
  localStorage.setItem("xpNeeded", xpNeeded);
  localStorage.setItem("level", level);
  localStorage.setItem("progressPercentage", (currentXp / xpNeeded) * 100);
}

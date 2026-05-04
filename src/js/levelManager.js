const currentXpElement = document.getElementById("current-xp");
const neededXpElement = document.getElementById("needed-xp");
const levelElement = document.getElementById("level");
const progressBar = document.getElementById("progress-bar");

export let currentXp = 0;
export let xpNeeded = 100;
export let level = 1;

export function addXp(amount) {
  currentXp += amount;

  while (currentXp >= xpNeeded) {
    currentXp -= xpNeeded;
    level++;
    xpNeeded += 20;
  }
}

export function removeXp(amount) {
  currentXp -= amount;
  if (currentXp < 0) currentXp = 0;
}

export function updateLevelInformation() {
  currentXpElement.textContent = currentXp;
  neededXpElement.textContent = xpNeeded;
  levelElement.textContent = `Level ${level}`;

  const percentage = Math.max(0, Math.min(100, (currentXp / xpNeeded) * 100));
  progressBar.style.width = percentage + "%";
}

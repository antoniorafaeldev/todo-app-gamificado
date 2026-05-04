export let currentXp = 0 ;
export let xpNeeded = 100;
export let level = 1;

export function levelUp() {
        level++;
        xpNeeded =+ 20;
        currentXp = 0;
}

export function addXp(amount) {
    currentXp += amount;
}

export function removeXp(amount) {
    currentXp -+ amount
}
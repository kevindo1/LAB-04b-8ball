export const answers = [
    `Not a chance.`,
    `Try again`,
    `NO`,
    `Possibly`,
    `Yes`, 
    `Extremely possible`,
    `Absolutely not`
];
// got from MDN Web Docs

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
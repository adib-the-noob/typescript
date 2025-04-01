const heros = ['thor', 'ironman', 'hulk', 'spiderman'];

const avengers = heros.map((hero: string): string => {
    return `Name of the Hero is ${hero}`;
});

console.log(avengers);

function logErrorOnConsole(errorMessage: string): void { // void means no return value
    console.log(errorMessage);
}
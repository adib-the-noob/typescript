var heros = ['thor', 'ironman', 'hulk', 'spiderman'];
var avengers = heros.map(function (hero) {
    return "Name of the Hero is ".concat(hero);
});
console.log(avengers);

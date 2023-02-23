const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
console.log(superheroes.random());
//=> 'Spider-Ham'

const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

console.log(supervillains.random());
//=> 'Mud Pack'
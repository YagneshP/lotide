const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');
//Test
const bestTvShowsByGenre = {
  sci_fi : 'The Expanse',
  comedy : 'The Office',
  action : 'Game of Thrones'
}

assertEqual(findKeyByValue(bestTvShowsByGenre,'Game of Thrones'), 'Game of Thrones');
assertEqual(findKeyByValue(bestTvShowsByGenre,'Game of Thrones'), 'action');
assertEqual(findKeyByValue(bestTvShowsByGenre,'The Office'), 'comedy');
assertEqual(findKeyByValue(bestTvShowsByGenre,'The office'), 'comedy');
assertEqual(findKeyByValue(bestTvShowsByGenre,'The office'), undefined);
assertEqual(findKeyByValue(bestTvShowsByGenre,'Breaking Bad'), undefined);
assertEqual(findKeyByValue(bestTvShowsByGenre,'The Office'), 'action');
assertEqual(findKeyByValue(bestTvShowsByGenre,'The Expanse'), 'sci_fi');
assertEqual(findKeyByValue(bestTvShowsByGenre,'The Expanse'), 'Sci_fi');
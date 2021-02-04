l = console.log;
cars = [{'horsepower': 100, 'name': 'hundo'}, {'horsepower': 200, 'name': 'yi'}, {'horsepower': 300, 'name': 'trips'}];

const { concat, safeHead, sequence,Maybe, resolve, id, left, Either, chain, Map, Task, always, traverse, split, join, sortBy, flip, IO, prop, either, compose, append, map, last, curry } = require('./support');

// readdir :: String -> Task Error [String]
const readdir = function readdir(dir) {
  return Task.of(['file1', 'file2', 'file3']);
};

// readfile :: String -> String -> Task Error String
const readfile = curry(function readfile(encoding, file) {
  return Task.of(`content of ${file} (${encoding})`);
});

// readFirst :: String -> Task Error (Maybe (Task Error String)) ----- have
// readFirst :: String -> Task Error (Maybe (String)) ----- want
const readFirst = compose(map(sequence(Maybe.of)), map(map(readfile('utf-8'))), map(safeHead), readdir);
// const readFirst = compose(sequence(Maybe.of), map(safeHead), readdir);

l(readFirst())
l(readFirst().fork(null, x => x))

// const x = Task.of(Maybe.of(3));

// l(x.fork(null, (y) => y));
/*initialize a new Map
initialize a new Set
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the Set
convert the Set to an array and return*/

function intersection(a, b) {
  let map = new Map();
  let set = new Set();
  a.forEach((e) => map.set(e));
  b.forEach((e) => {
    if (map.has(e)) set.add(e);
  });
  return [...set];
}

module.exports = intersection;

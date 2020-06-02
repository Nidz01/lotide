const assertEqual = function(actual, expected) {
  const pass = ':hourglass::hourglass::hourglass::hourglass:';
  const fail = ':octagonal_sign::octagonal_sign::octagonal_sign:';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const result = new Object();
  // NOTE: SOLUTION 1 - O(n^m) time
  // for (let key in itemsToCount) {
  //   let count = 0;
  //   if (itemsToCount[key]) {
  //     for (let item of allItems) {
  //       if (item === key) {
  //         count++;
  //       }
  //     }
  //   }
  //   if (count > 0) {
  //     result[key] = count;
  //   }
  // }

  // NOTE: SOUTION 2 - O(n) time
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (!result[item]) {
        result[item] = new Number();
        result[item] += 1;
      } else {
        result[item] += 1;
      }
    }
  }
  return result;
}

// TESTING CODE
const firstNames = [
"Karl",
"Salima",
"Agouhanna",
"Fang",
"Kavith",
"Jason",
"Salima",
"Fang",
"Joe"
];

const result1 = countOnly(firstNames, {
"Jason": true,
"Karima": true,
"Fang": true
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
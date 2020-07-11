const _ = require("lodash");
const data = [
  {
    name: "Red",
    userId: "batman"
  },
  {
    name: "Red",
    userId: "batman"
  },
  {
    name: "Blue",
    userId: "batman"
  },
  {
    name: "Blue",
    userId: "gangam"
  }
];

let results = [];
const grouppedData = _.groupBy(data, "userId");
console.log(grouppedData);
for (let userId in grouppedData) {
  const name = grouppedData[userId].reduce(
    (acc, val) => ({
      ...acc,
      [val.name]: acc[val.name] ? acc[val.name] + 1 : 1
    }),
    {}
  );

  results.push({
    userId,
    name
  });
}

console.log(results);


///////////////////////////


"https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects"
"https://stackoverflow.com/questions/18773778/create-array-of-unique-objects-by-property"
"https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/"
"https://codeburst.io/writing-javascript-with-map-reduce-980602ff2f2f"

//////////////////

const data = [
    {
        "name": "Red",
        "userId": "batman"
    },
    {
        "name": "Red",
        "userId": "batman"
    },
    {
        "name": "Blue",
        "userId": "batman"
    }
];

const groupBy = (items, key) => items.reduce(
(result, item) => ({
...result,
[item[key]]: [
  ...(result[item[key]] || []),
  item,
],
}), 
{},
);
const result = groupBy(data, "userId");
console.log(result);

///////////////////////////////


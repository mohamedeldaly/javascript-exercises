const removeFromArray = function (arr, ...items) {
  for (let i = 0; i < items.length; i++) {
    let index = arr.indexOf(items[i]);
    if (index !== -1) {
      arr.splice(index, 1);
      i--;
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
